import { useEffect, useCallback } from 'react'
import axios from 'axios'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { exchangeRateState, upbitTickersState, binanceTickersState, kimchiPremiumDataState } from '../_state/state'
import { BinanceTickerData, KimchiPremiumData } from '../_types/types'

//비트코인 점유율, 시가총액, 24시간 거래량

//환율 정보 가져오기
export function useExchangeRateFetcher() {
  const setExchangeRate = useSetRecoilState(exchangeRateState)

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD')
        const rate = response.data[0].basePrice
        setExchangeRate(rate)
      } catch (error) {
        console.error('Error fetching exchange rate:', error)
      }
    }
    fetchExchangeRate()
  }, [setExchangeRate])
}

// Upbit tickers fetcher
export function useUpbitTickersFetcher() {
  const setUpbitTickers = useSetRecoilState(upbitTickersState)

  useEffect(() => {
    const fetchUpbitMarketCodes = async () => {
      try {
        const response = await axios.get('https://api.upbit.com/v1/market/all')
        const krwMarkets = response.data.filter((market) => market.market.startsWith('KRW'))
        const marketInfos = krwMarkets.map((market) => ({ code: market.market, koreanName: market.korean_name }))
        return marketInfos
      } catch (error) {
        console.error('Error fetching Upbit market codes:', error)
        return []
      }
    }

    const initUpbitWebSocket = async () => {
      const marketInfos = await fetchUpbitMarketCodes()
      if (marketInfos.length > 0) {
        const marketCodes = marketInfos.map((market: { code: string }) => market.code)
        const ws = new WebSocket('wss://api.upbit.com/websocket/v1')
        ws.onopen = () => {
          ws.send(JSON.stringify([{ ticket: 'test' }, { type: 'ticker', codes: marketCodes }]))
        }
        ws.onmessage = (event) => {
          const reader = new FileReader()
          reader.onload = () => {
            try {
              const newData = JSON.parse(reader.result)
              const newDataWithKoreanName = {
                ...newData,
                koreanName: marketInfos.find((market: { code: string }) => market.code === newData.code)?.koreanName || 'Unknown',
              }
              setUpbitTickers((prevTickers) => [...prevTickers.filter((ticker) => ticker.code !== newData.code), newDataWithKoreanName])
            } catch (error) {
              console.error('Error parsing Upbit ticker data:', error)
            }
          }
          reader.readAsText(event.data)
        }
        return () => ws.close()
      }
    }

    initUpbitWebSocket()
  }, [setUpbitTickers])
}

// Binance tickers fetcher
export function useBinanceTickersFetcher() {
  const setBinanceTickers = useSetRecoilState(binanceTickersState)

  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/!miniTicker@arr')
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        setBinanceTickers((prev) => {
          const newTickers = { ...prev }
          data.forEach((ticker: BinanceTickerData) => {
            if (ticker.s.endsWith('USDT')) {
              newTickers[ticker.s] = ticker
            }
          })
          return newTickers
        })
      } catch (error) {
        console.error('Error parsing Binance ticker data:', error)
      }
    }
    return () => ws.close()
  }, [setBinanceTickers])
}

// 김치프리미엄 계산 후 코인 리스트 상태 세팅
export function useKimchiPremiumCalculator() {
  const setKimchiPremiumData = useSetRecoilState(kimchiPremiumDataState)
  const exchangeRate = useRecoilValue(exchangeRateState)
  const upbitTickers = useRecoilValue(upbitTickersState)
  const binanceTickers = useRecoilValue(binanceTickersState)

  useExchangeRateFetcher()
  useUpbitTickersFetcher()
  useBinanceTickersFetcher()

  const calculatePremiumData = useCallback(async () => {
    if (upbitTickers.length > 0 && Object.keys(binanceTickers).length > 0 && exchangeRate > 0) {
      const premiumData: KimchiPremiumData[] = upbitTickers
        .map((upbitTicker) => {
          const binanceTickerSymbol = `${upbitTicker.code.replace('KRW-', '')}USDT`
          const binanceTicker = binanceTickers[binanceTickerSymbol]

          if (binanceTicker) {
            const koreanName = upbitTicker.koreanName
            const upbitPrice = upbitTicker.trade_price
            const binancePrice = parseFloat(binanceTicker.c) * exchangeRate
            const premium = ((upbitPrice - binancePrice) / binancePrice) * 100
            const binanceTradePrice24h = binanceTicker.q * exchangeRate

            return {
              koreanName,
              code: upbitTicker.code,
              upbitPrice,
              binancePrice,
              premium,
              upbitPrevClosePrice: upbitTicker.prev_closing_price,
              upbitHighPrice: upbitTicker.high_price,
              upbitLowPrice: upbitTicker.low_price,
              upbitTradePrice24h: upbitTicker.acc_trade_price_24h,
              binancePrevClosePrice: binanceTicker.pc,
              binanceHighPrice: binanceTicker.h,
              binanceLowPrice: binanceTicker.l,
              binanceTradePrice24h,
            }
          }
          return null
        })
        .filter((data): data is KimchiPremiumData => data !== null)

      setKimchiPremiumData(premiumData)
    }
  }, [exchangeRate, upbitTickers, binanceTickers, setKimchiPremiumData])

  useEffect(() => {
    calculatePremiumData()
  }, [calculatePremiumData])
}
