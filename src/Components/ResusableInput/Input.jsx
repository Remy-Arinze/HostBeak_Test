import React from 'react'
import './Input.css'

function Input({Label, dest, placeholder, name,}) {
  return (
    <>
        <label className='labelstwo' htmlFor={dest}>{Label}</label>
        <input placeholder={placeholder} className='details' type="text" name={name} />
    </>
  )
}

export default Input