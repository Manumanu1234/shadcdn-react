import React from 'react'
import "./secion1.css"
import { CiBank } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { VscGraphLine } from "react-icons/vsc";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { CiMoneyBill } from "react-icons/ci";
import { TbSettingsCog } from "react-icons/tb";
function Section1() {
  return (
    <div className='Sections'>
      <div className='fist'>
        <span className='iconic' ><CiBank /></span>
        <h3 className='sechead' style={{marginTop:'5px'}}>Banking</h3>
        <p className='sechead2' style={{marginTop:'2px'}}>FDIC insured accounts</p>
      </div>
      <div className='fist'>
        <span className='iconic' ><CiCreditCard1 /></span>
        <h3 className='sechead' style={{marginTop:'5px'}}>Coprate credit card</h3>
        <p className='sechead2' style={{marginTop:'2px'}}>Acces credit faster</p>
      </div>
      <div className='fist'>
        <span className='iconic' ><VscGraphLine /></span>
        <h3 className='sechead' style={{marginTop:'5px'}}>Mercury Tesury</h3>
        <p className='sechead2' style={{marginTop:'2px'}}>Lower rist,high-liquidity portfolios</p>
      </div>

      <div className='fist'>
        <span className='iconic' ><FaArrowRightArrowLeft /></span>
        <h3 className='sechead' style={{marginTop:'5px'}}>Payments</h3>
        <p className='sechead2' style={{marginTop:'2px'}}>Send and reacive money easily</p>
      </div>
      <div className='fist'>
        <span className='iconic' ><CiMoneyBill /></span>
        <h3 className='sechead' style={{marginTop:'5px'}}>Startup-friendly capital</h3>
        <p className='sechead2' style={{marginTop:'2px'}}>Scale with venture debit or safes</p>
      </div>
      <div className='fist'>
        <span className='iconic' ><TbSettingsCog /></span>
        <h3 className='sechead' style={{marginTop:'5px'}}>Automated workflows</h3>
        <p className='sechead2' style={{marginTop:'2px'}}>Save time eliminate error</p>
      </div>
      
    </div>
    
  )
}

export default Section1