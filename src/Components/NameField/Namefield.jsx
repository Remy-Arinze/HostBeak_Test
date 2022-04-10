import React from 'react'
import './Namefield.css'

function Namefield({dest, placeholder, name, Label}) {
  return (
    <div className="nameCOntainer">
        <label htmlFor={dest}>{Label}</label>
        <input placeholder={placeholder} className='fName' type="text" name={name} />
    </div>
  )
}

export default Namefield