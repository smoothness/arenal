import React from 'react'
import { Price } from '../types/types'

interface ITableProps {
  headers: string[]
  rows: Price[]
}

const Table = ({ headers, rows }: ITableProps) => {
  return (
    <table className="w-full border-collapse border-gray-900 border-1 border-solid">
      <thead>
        <tr className="capitalize bold bg-slate-200 border-gray-900 border-2 border-solid p-2">
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className="hover:bg-slate-100 cursor-pointer">
            {Object.values(row).map((value, index) => (
              <td key={index} className="border-gray-900 border-2 border-solid p-2">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
