import React,{useEffect,useState} from "react";

import {Link } from "react-router-dom";

import {navLinks} from "../constants/index";
import {logo } from "../assets";
import {close } from "../assets";
import {menu } from "../assets";


import Styles from "../styles";



const Navbar = () => {


  const [toggle,setToggle]=useState(false)  
  const [active,setActive]=useState('')


  
  return (
    <nav  

   className={`${
      Styles.paddingX
    } w-full flex items-center py-5 fixed top-0 z-20 `} 
    >
   <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">

     
     
     <Link
     to="/"
     className="flex items-center gap-2"
     onClick={()=>{
      setActive("");
      window.scrollTo(0,0)
     }}

     >
     <img src={logo} alt="logo" className="w-9 h-9  mx-4 object-contain"/>
    <p className="text-White text-[18px] font-bold cursor-pointer flex">Aman &nbsp;<span className="sm:block hidden">|Web Dev</span></p>
      
      
      </Link>



      <ul className='list-none hidden mx-4 sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>


     <div className="sm:hidden flex flex-1 mx-4 justify-end items-center">

        <img src={toggle? close: menu} alt="menu" onClick={()=>setToggle(!toggle)} className="w-[28px] h-[28px] object-contain cursor-pointer"/>

         <div className={`${!toggle?'hidden': 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        

         <ul className="list-none flex justify-end items-start flex-col gap-4">
    
    {navLinks.map(link=>

    <li
    key={link.id}
    className={`${active===link.title?"text-white":"text-secondary"} font-poppins fonts-medium  cursor-pointer text-[16px]`}
    onClick={()=>{
      setToggle(!toggle);
      setActive(link.title)}}
    >
 
      <a href={`#${link.id}`}>{link.title}</a>
    </li>

    )

    }

     </ul>
     </div>
     </div>
   </div>

    </nav>
    
    
  )
}

export default Navbar