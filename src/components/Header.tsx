import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="py-4 mb-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-500">Arenal Software</h1>
          <h2 className="text-2xl font-bold mb-8">Crypto Tracker</h2>
        </div>
        <nav>
          <ul className="flex">
            <li className="text-xl underline hover:no-underline mr-5">
              <Link to="/">Home</Link>
            </li>
            <li className="text-xl underline hover:no-underline">
              <Link to="/history">30 Day History</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
