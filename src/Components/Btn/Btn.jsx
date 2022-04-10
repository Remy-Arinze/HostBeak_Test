import React from 'react'
import './Btn.css'

function Btn({title,Color,Border,color,right}) {
  return (
    <button style={{right:right,backgroundColor:Color,color:color, border:Border}} className="btns">
    {title}
    </button>
  )
}

export default Btn