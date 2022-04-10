import React from 'react'
import './TopNav.css'

function TopNav() {
  return (
    <div className='topNavContainer'>
        <div className="tag">
            <img src={require('../../Assets/Vector.png')} alt="" className="tagLogo" />
            <h4 className="title">HostBeak</h4>
            <img src={require('../../Assets/ic_chevron.png')} alt="" className="chevron" />
        </div>
        <div className="accountTag">
            <img src={require('../../Assets/Group 67.png')} alt="" className="notifi" />
            <div className="accountcircle">

            </div>
            <p className="accountName">Ogbonna</p>
            <img src={require('../../Assets/down.png')} alt="" className="vecIcon" />
        </div>
    </div>
  )
}

export default TopNav