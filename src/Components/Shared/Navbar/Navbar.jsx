import Link from 'next/link';
import React from 'react';
import { FaClock, FaHome } from 'react-icons/fa';
import { FaChartSimple } from 'react-icons/fa6';

const Navbar = () => {
    return (
       <div className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md px-10">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <Link href=""><h2 className='font-semibold text-2xl text-[#1f2937]'>Keen<span className='text-[#244d3f]'>Keeper</span></h2></Link>
    </div>
  
    <div className="navbar-center  md:navbar-end">
       <ul className="menu menu-horizontal ">
        <Link href="/"><li><button className='btn  bg-[#244D3F] text-white font-semibold '><FaHome></FaHome> Home</button></li></Link>
        <Link href="/timeline"><li><button className='btn  font-semibold mx-4'><FaClock></FaClock> Timeline</button></li></Link>
        <Link href="/stats"><li><button className='btn  font-semibold'><FaChartSimple></FaChartSimple>Stats</button></li></Link>
        
      </ul>
    </div>
  </div>

 
</div>
    );
};

export default Navbar;