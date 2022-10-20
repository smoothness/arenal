import { FearGreedIndex, Price, TodaysPrice } from '../types/types'

const getMonthTotal = (prices: Price[]) => {
  const price = prices.map((day: Price) => day.close)
  return price.reduce((a: number, b: number) => a + b, 0)
}

const getMonthDays = (prices: Price[]) => prices.length

export const getMonthAverage = (prices: Price[]) => {
  const average = (getMonthTotal(prices) / getMonthDays(prices)).toFixed(2)
  return Number(average)
}

export const takeAction = (
  prices: Price[],
  todaysPrice: TodaysPrice | null,
  fearGreedIndex: FearGreedIndex | null
) => {
  const monthAverage = getMonthAverage(prices)
  const todaysPr = todaysPrice?.price_24h
  const fgi = Number(fearGreedIndex?.data[0].value)

  if (todaysPr && fearGreedIndex) {
    if (todaysPr < monthAverage && fgi < 20) {
      return 'buy'
    }
    if (todaysPr > monthAverage && fgi > 80) {
      return 'sell'
    }
    return 'hold'
  }
}
