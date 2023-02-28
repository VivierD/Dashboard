import { useState, useRef } from 'react'
import BarChart from '../../Components/AllChart/BarChart'
import './DashboardFinance.css'

export default function DashboardFinance() {
  return (
    <div className='global-container'>
      <h1>Les résultats de l'année : </h1>

      <form>
        <label htmlFor='year'>Choisissez une date</label>
        <select id="year" >
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </form>

      <div className='dashboard-container'>
        <BarChart />
      </div>
    </div>
  )
}
