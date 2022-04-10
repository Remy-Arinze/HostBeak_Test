import React from 'react'
import './datepicker.css'

function Datepicker({name}) {
  return (
    <div className='datePicker'>
        <p className="date">
            {name}
        </p>

        <input className='dateInput' type="date" />
    </div>
  )
}

export default Datepicker