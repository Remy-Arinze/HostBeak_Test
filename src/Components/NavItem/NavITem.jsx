import React,{useState} from 'react'
import './NavItem.css'

function NavITem({Link,image, sub1,sub2,sub3}) {
  const [clicked,setClicked] = useState(false)

  function handleclick(){
    setClicked(!clicked)
  }
  return (
    <div className='Itemcontainer'>
    <div onClick={handleclick} className="navItemContainer">
      <div
      style={{
        padding:clicked ? '1rem' : null,
        borderRadius : clicked ? '50%' :  null,
        background: clicked ? 'blue' :  null,
        height: clicked ? '1.4rem' :'1.4rem',
        width: clicked ? '1.4rem' : '1.4rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginRight: '15px'
      }} 
      >
        <img style={{
        }} src={image} alt="" className="logo" />
      </div>
      <p style={{
        color:clicked ? 'blue' : null
      }} className="linkName">{Link}</p>
    </div>
    
    <div style={{display:clicked ? 'block' : 'none'}} className="collapse">
      <p className="subs">{sub1 ? sub1 : null}</p>
      <p className="subs">{sub2 ? sub2 : null}</p>
      <p className="subs">{sub3 ? sub3 : null}</p>
    </div>
    </div>
  )
}

export default NavITem