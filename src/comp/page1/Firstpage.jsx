import React from 'react'
import "./fistpage.css"
import { GoArrowUpRight } from "react-icons/go";
import Section1 from '../page1secion2/Section1';
function Firstpage() {
  return (
    <div className='totalcontainer'>
        <div className='Headindiv'>
        <h3 className='heading'>Let Banking Power Your Financial Operation</h3>
        </div>
        <div className='Hedingbtn'>
            <button className='explore'>Explore demo<span className='growupicon'><GoArrowUpRight /></span> </button>
        </div>
        <Section1></Section1>
      

    </div>
  )
}

export default Firstpage