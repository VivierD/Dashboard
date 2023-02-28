import React from 'react'
import { Bar } from 'react-chartjs-2'
import fullData from '../../context/fulldata'

export default function BarChart() {
  return (
    <div className='chart-container'>
        <Bar
        redraw={true}
        data={{
            labels:["Jan/Fev","Mar/Avr","Mai/Ju","Jui/Aout","Sep/Oct","Nov/Dev"],
            datasets:[
                {
                    label:"Chiffres bimestriel",
                    data: fullData['2020'].chart1
                }
            ]
        }}
         />
    </div>
  )
}
