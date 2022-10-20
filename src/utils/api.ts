export const BC_PRICE_API = 'https://api.blockchain.com/v3/exchange/tickers/BTC-USD'
export const FEAR_GREED_INDEX_URL = 'https://api.alternative.me/fng/'

export const API = {
  getTodayPrice: async () => {
    const response = await fetch(BC_PRICE_API)
    const data = await response.json()
    return data
  },
  getFearGreedIndex: async () => {
    const response = await fetch(FEAR_GREED_INDEX_URL)
    const data = await response.json()
    return data
  },
}
