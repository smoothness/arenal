export type Price = {
  date: string
  symbol: string
  close: number
}

export type TodaysPrice = {
  symbol: string
  price_24h: number
  volume_24h: number
  last_trade_price: number
}

export type FearGreedIndex = {
  name: string
  data: FearGreedIndexData[]
  metadata: FearGreedIndexMetaData
}

type FearGreedIndexData = {
  value: string
  value_classification: string
  timestamp: string
  time_until_update: string
}

type FearGreedIndexMetaData = FearGreedIndexMetaDataValues

type FearGreedIndexMetaDataValues = string | null

export type Result = 'buy' | 'sell' | 'hold' | null
