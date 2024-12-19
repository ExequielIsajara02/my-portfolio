import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

const NavBar = () => {

    const [display, setDisplay] = useState('hidden');

    const handleDisplay = () => {
        if(display === 'hidden'){
            setDisplay('flex')
        }
        else {
            setDisplay('hidden')
        }
    }

  return (
    <nav className='flex bg-emerald-500 text-white'>
        <ul className='w-3/5 max-lg:w-1/2'>
            <li><a href="#">Linkedin</a></li>
            <li><a href="#">GitHib</a></li> 
        </ul>
        <ul className={`${display} bg-emerald-500 justify-center items-center w-2/5 space-x-16 max-lg:w-1/2 max-md:${display} max-md:flex-col max-md:absolute max-md:top-12 max-md:w-full max-md:text-center max-md:space-x-0`}>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
        <button className='md:hidden w-1/2' onClick={handleDisplay}><FaBars /></button>
    </nav>
  )
}

export default NavBar