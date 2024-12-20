import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";

const NavBar = () => {

    const [display, setDisplay] = useState(false);

  return (
    <nav className='flex bg-sky-700 text-white'>
        <ul className='w-3/5 max-lg:w-1/2'>
            <li><a href="#">Linkedin</a></li>
            <li><a href="#">GitHib</a></li> 
        </ul>
        <ul className={`flex bg-sky-700 justify-center items-center w-2/5 space-x-16 max-lg:w-1/2 ${display === false ? 'max-md:hidden' : 'max-md:flex'} max-md:flex-col max-md:absolute max-md:top-12 max-md:w-full max-md:text-center max-md:space-x-0`}>
            <li><a href="/">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
        <button className='md:hidden w-1/2' onClick={() => {
            if(display){
                setDisplay(false)
            }
            else {
                setDisplay(true)
            }
        }}><FaBars /></button>
    </nav>
  )
}

export default NavBar