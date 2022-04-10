import React from 'react'
import './Selectable.css'

function Selectable({title,}) {
  return (
    <div className='select'>
      <p className="title">{title}</p>
      <select className='selectItem' name="Vendors" id="">
      <option value="karen">Choose</option>
      <option value="seth">Choose</option>
      <option value="Remy">Choose</option>
    </select>
    </div>
    
  )
}

export default Selectable