import React from 'react'
import './subs.css'

function Subs({sub, price,Top,Right}) {
  return (
    <div style={{top:Top, right:Right}} className="subtotal">
            <p className="subT">{sub}</p>
            <p className="total">{price}</p>
            </div>
  )
}

export default Subs