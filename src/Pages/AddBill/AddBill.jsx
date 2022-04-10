import React from 'react'
import './addBill.css'
import { Button, Datepicker, InputType, Nav, Select, Selectable, Subs, Title, TopNav } from '../../Components'
import {FaPenAlt, FaTrash} from 'react-icons/fa'
function AddBill() {
  return (
    <div className='addBillContainer'>
    <TopNav />
      <div className="adBillContainer">
        <Nav />
        <div className="addBillMain">
        <h2>Add Bill</h2>

        <div className="addBillItems">
          <div className='addBillItem'>
          <Select name1='Christine' name2='Hugh Jackman' name3='Jeremy Renner' title='Vendor'/>
          <Select name1='NGN' name2='EUR' name3='USD' title='Currency' />
          <div className="PO">
            <p className='so'>Upload copy of bill</p>
            <input className='file' type="file" name="" id="" />
          </div>
          </div>
          <div className='addBillItem'>
          <Datepicker name='Date' />
          <Datepicker name='Due Date' />
          <div className="PO">
            <p className='so'>P.O/S.O</p>
            <input  type="text" name="" id="" />
          </div>
          </div>
          <div className='addBillItem'>
          <div className="PO filedith">
            <p className='so'>P.O/S.O</p>
            <input  type="text" name="" id="" />
          </div>
          <textarea name="area" id="" cols="20" rows="5"></textarea>
          </div>
        </div>

        <div className="desc">
          <div className="titles">
            <Title title='Item' />
            <Title title='Expense Category' />
            <Title title='Description' />
            <Title title='Qty' />
            <Title title='Price' />
            <Title title='Tax' />
            <Title title='Amount' />
            
          </div>
          <div className="checks">
          <Selectable />
          <Selectable />
            <InputType width='100px' />
            <InputType width='30px' />
            <InputType width='20px'/>
            <InputType width='20px'/>
            <div className="amount">
              <FaPenAlt size={10} color='black' />
              <p className="change">N0.00</p>
              <FaTrash  size={13} color='black' />
            </div>
            </div>

            <Subs Top='30%' Right='2%'  sub='Subtotal: ' price='0:00'/>
            <Subs Top='40%' Right='1%' sub='Total(NGN): ' price='0:00'/>
            <Button right='0%' color='gray' Border='1px solid gray' title='Cancel' Color='transparant' />
            <Button right='6%' color='white' Border='1px solid white' title='Save' Color='#3DB0FF' />
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default AddBill