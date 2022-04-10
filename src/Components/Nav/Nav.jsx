import React from 'react'
import NavITem from '../NavItem/NavITem'
import './Nav.css'

function Nav() {
  return (
    <div className='NavContainer'>
        <NavITem Link='Welcome' image={require('../../Assets/shuttle.png')} />
        <NavITem Link='Dashboard' image={require('../../Assets/ic_dashboard.png')} />
        <NavITem Link='Sales' image={require('../../Assets/ic_wallet.png')} />
        <NavITem Link='Purchase' sub1='Bills' sub2='Vendors' sub3='Products & Services' image={require('../../Assets/Purchase Icon.png')} />
        <NavITem Link='Accounting' image={require('../../Assets/Accounting-595b40b75ba036ed117d4fad 1.png')} />
        <NavITem Link='Banking' image={require('../../Assets/bank.png')} />
        <NavITem Link='Payroll' image={require('../../Assets/ic_invoices.png')} />
        <NavITem Link='Reports' image={require('../../Assets/tabler_report.png')} />
        <NavITem Link='Analytics' image={require('../../Assets/Group 945.png')} />
        <NavITem Link='Reports' image={require('../../Assets/settings.png')} />

        <div className="logout">
        <NavITem Link='LogOut' image={require('../../Assets/logout.png')} />
        </div>

        <div className="card">
          <img src={require('../../Assets/bi_credit-card-fill.png')} alt="" className="cardImg" />
          <p className="accept">Accept Payments</p>
        </div>
    </div>
  )
}

export default Nav