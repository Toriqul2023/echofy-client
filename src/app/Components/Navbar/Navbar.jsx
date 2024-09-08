'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Topbar from '../Topbar/Topbar'

const Navbar = () => {
  const [active,setActive]=useState(false)

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>=100){
        setActive(true)
      }
      else{
        setActive(false)
      }

    }
    window.addEventListener('scroll',handleScroll)

    return ()=>{
      window.addEventListener('scroll',handleScroll)
    }
  })
  return (
    <>
    
      <div className={`w-[100%]  fixed top-[50px] transition ease-in delay-2s ${active ? 'bg-black top-[0px]':'top-[50px]'} py-4 h-[100px] z-[999]`}>
        <div className='w-[70%] flex mx-auto justify-between items-center'>
      
        
        <div>
            <Image style={{width:'160px',height:'44px'}} alt='' src={'https://html.ditsolution.net/echofy/assets/images/home1/logo.png'} height={500} width={500} />
        </div>
    <div>
        <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link href={''}>Item 3</Link></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><Link href={''}>Item 3</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link href={''} className="btn bg-[#49AF45] text-white">Resume</Link>
  </div>
</div>
    </div>

    </div>
    </div>   
    </>
  
  )
}

export default Navbar