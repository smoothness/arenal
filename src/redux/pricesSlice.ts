import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { Price, TodaysPrice, FearGreedIndex, Result } from '../types/types'
import { data } from '../data/data.js'
import { BC_PRICE_API, FEAR_GREED_INDEX_URL } from '../utils/api'

type SliceState = {
  prices: Price[]
  todaysPrice: TodaysPrice | null
  fearGreedIndex: FearGreedIndex | null
  result: Result
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export const getTodaysPrice = createAsyncThunk('prices/getTodaysPrice', async () => {
  const response = await fetch(BC_PRICE_API)
  const data = await response.json()
  return data
})

export const getTodaysFGI = createAsyncThunk('prices/getTodaysFGI', async () => {
  const response = await fetch(FEAR_GREED_INDEX_URL)
  const data = await response.json()
  return data
})

const initialState: SliceState = {
  prices: data,
  todaysPrice: null,
  fearGreedIndex: null,
  result: null,
  loading: 'idle',
}

export const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodaysPrice.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(getTodaysPrice.fulfilled, (state, action) => {
      state.loading = 'succeeded'
      state.todaysPrice = action.payload
    })
    builder.addCase(getTodaysPrice.rejected, (state) => {
      state.loading = 'failed'
    })
    builder.addCase(getTodaysFGI.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(getTodaysFGI.fulfilled, (state, action) => {
      state.loading = 'succeeded'
      state.fearGreedIndex = action.payload
    })
    builder.addCase(getTodaysFGI.rejected, (state) => {
      state.loading = 'failed'
    })
  },
})

export const { setResult } = pricesSlice.actions
export default pricesSlice.reducer
