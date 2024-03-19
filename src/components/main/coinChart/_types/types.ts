// 업비트 티커 데이터 인터페이스 정의
export interface UpbitTickerData {
  koreanName: string
  type: string
  code: string
  opening_price: number
  high_price: number
  low_price: number
  trade_price: number
  prev_closing_price: number
  change: string
  change_price: number
  signed_change_price: number
  change_rate: number
  signed_change_rate: number
  trade_volume: number
  acc_trade_price: number
  acc_trade_price_24h: number
  acc_trade_volume: number
  acc_trade_volume_24h: number
  trade_date: string
  trade_time: string
  trade_timestamp: number
  ask_bid: string
  acc_ask_volume: number
  acc_bid_volume: number
  highest_52_week_price: number
  highest_52_week_date: string
  lowest_52_week_price: number
  lowest_52_week_date: string
  trade_status: string
  market_state: string
  market_state_for_ios: string
  is_trading_suspended: boolean
  delisting_date: string
  market_warning: string
  timestamp: number
  stream_type: string
}

// 바이낸스 티커 데이터 인터페이스 정의
export interface BinanceTickerData {
  s: string // Symbol
  c: string // Last trade price
  pc: number // Previous close price
  h: number // High price
  l: number // Low price
  q: number // 24 hour trade price
}

// 김치 프리미엄 데이터 인터페이스 정의
export interface KimchiPremiumData {
  koreanName: string
  code: string // Coin code
  upbitPrice: number // Upbit price
  binancePrice: number // Binance price (converted to KRW)
  premium: number // Kimchi premium (%)
  upbitPrevClosePrice: number // Upbit's previous closing price
  upbitHighPrice: number // Upbit's high price
  upbitLowPrice: number // Upbit's low price
  upbitTradePrice24h: number // Upbit's 24 hour trading price
  binancePrevClosePrice: number // Binance's previous closing price
  binanceHighPrice: number // Binance's high price
  binanceLowPrice: number // Binance's low price
  binanceTradePrice24h: number // Binance's 24 hour trading price
}
