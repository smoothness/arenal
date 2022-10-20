import React from 'react'
import type { RootState } from '../redux/store'
import { useSelector } from 'react-redux'

import Table from '../components/Table'

const History = () => {
  const data = useSelector((store: RootState) => store.prices)

  return (
    <div>
      <h1>30 Day History</h1>
      <Table headers={['date', 'symbol', 'close']} rows={data.prices} />
    </div>
  )
}

export default History
