import React from 'react'
import { Input, NamedInput } from '../../Components'
import {Link} from 'react-router-dom'
import './signUp.css'

function SignUp() {
  return (
    <div className='signUpContainer'>
      <div className="container">
        <div className="signupImage">
        <p className="welcomemsg">
        Building exceptional services with Back Office Support and Business Perfomance
        </p>
          <img src={require('../../Assets/image 2.png')} alt="" className="img" />
        </div>
        <div className="signupForm">
          <h1 className='createAccount'>Create Account</h1>
          <p className="create">Create an exceptional business</p>


          <form className='form' action="">
            <div className="names">
            <NamedInput placeholder='Enter Your First Name' name='fName' dest='name' Label='First Name' />
            <NamedInput placeholder='Enter Your Last Name' name='lName' dest='lame' Label='Last Name' />
            </div>
            
            <input placeholder='Enter Your Password' className='details' type="text" name='phone' />
            <Input dest='phone' name='phone' Label='Phone Number' placeholder='Enter Your Phone Number' />
            <Input dest='email' name='email' Label='Email' placeholder='Enter Your Email'/>
            <Input dest='phone' name='phone' Label='Phone Numbe' placeholder='Enter Your Password' />

            <div className="rest">
            <div className="remember">
            <input type="radio" />
            <p className="rememberMe">remember me</p>
            </div>
            <p className="forgot">Forgot Password?</p>
            </div>

            <Link style={{width:'100%'}} to='/addBill'><button style={{width:'100%'}} className="signUp">SignUp</button></Link>
            <p className="getAnAccount">Got and account? <span className="signIN">Sign In</span></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp