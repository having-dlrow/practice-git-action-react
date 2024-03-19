import { atom } from 'recoil'
import { BinanceTickerData, KimchiPremiumData, UpbitTickerData } from '../_types/types'

export const exchangeRateState = atom<number>({
  key: 'exchangeRate',
  default: 0,
})

export const upbitTickersState = atom<UpbitTickerData[]>({
  key: 'upbitTickers',
  default: [],
})

export const binanceTickersState = atom<{ [key: string]: BinanceTickerData }>({
  key: 'binanceTickers',
  default: {},
})

export const kimchiPremiumDataState = atom<KimchiPremiumData[]>({
  key: 'kimchiPremiumData',
  default: [],
})
