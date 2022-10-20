import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

import { getTodaysPrice, getTodaysFGI } from '../redux/pricesSlice'
import { AppDispatch } from '../redux/store'
import { setResult } from '../redux/pricesSlice'
import { Spinner } from '../components'
import { takeAction, getMonthAverage } from '../utils/logic'

const buyStyle = {
  color: 'green',
  border: '1px solid green',
}

const Home = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { todaysPrice, fearGreedIndex, loading, prices, result } = useSelector(
    (store: RootState) => store.prices
  )

  const calculateResult = () => {
    dispatch(setResult(takeAction(prices, todaysPrice, fearGreedIndex)))
  }

  useEffect(() => {
    dispatch(getTodaysPrice())
    dispatch(getTodaysFGI())
  }, [])

  return (
    <>
      {loading === 'pending' && <Spinner message="Loading data..." />}
      {loading === 'succeeded' && (
        <div>
          <p className="text-center">
            Todays Price: <strong>{todaysPrice && todaysPrice?.price_24h}</strong>
          </p>
          <p className="text-center">
            Todays Fear or Greed Index:
            <strong>{fearGreedIndex && fearGreedIndex?.data[0]?.value}</strong>
          </p>
          <p className="text-center mb-6">
            Monthly Average:
            <strong>{getMonthAverage(prices)}</strong>
          </p>

          <div className="flex flex-col items-center">
            {!result && loading === 'succeeded' && (
              <button
                onClick={calculateResult}
                className="border-2 bg-slate-100 border-slate-600 uppercase font-bold text-base px-6 py-4 rounded-md w-fit"
              >
                Get todays recommendation
              </button>
            )}
            {result && (
              <>
                <h1 className="text-xl font-bold mb-8">Todays recommendation:</h1>
                <div className="p-5 rounded-md capitalize text-2xl" style={buyStyle}>
                  {result}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Home
