import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";

const Skills = () => {
  return (
    <div>
        <div className='w-1/2 mx-auto mt-8'>
            <h1 className='font-bold text-xl'>Skills Overview</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repudiandae eaque enim corrupti dolorem maxime, nemo tempore optio neque quae, accusamus quod provident exercitationem quisquam molestiae incidunt nesciunt obcaecati accusantium corporis!</p>
        </div>
        <div className='flex w-1/2 mx-auto space-x-36 mt-6'>
            <div>
                <p className='bg-sky-700 rounded-md border-none text-white'>Frontend</p>
                <ul className='bg-sky-500 flex flex-col p-4 rounded-md text-white w-60'>
                    <li className='flex items-center text-lg'><FaCss3Alt className='mr-1'/>CSS</li>
                    <li className='flex items-center text-lg'><IoLogoJavascript className='mr-1'/>Javascript</li>
                    <li className='flex items-center text-lg'><FaReact/>React</li>
                </ul>
            </div>
            <div>
                <div>
                    <p className='bg-sky-700 rounded-md border-none text-white'>Backend</p>
                    <ul className='bg-sky-500 flex flex-col p-4 rounded-md text-white w-60'>
                        <li className='flex items-center text-lg'><FaCss3Alt className='mr-1'/> MySQL</li>
                        <li className='flex items-center text-lg'><IoLogoJavascript className='mr-1'/> Java</li>
                        <li className='flex items-center text-lg'><FaReact className='mr-1'/> Spring Boot</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <p className='bg-sky-700 rounded-md border-none text-white'>Others</p>
                    <ul className='bg-sky-500 flex flex-col p-4 rounded-md text-white w-60'>
                        <li className='flex items-center text-lg'><FaCss3Alt className='mr-1'/>CSS</li>
                        <li className='flex items-center text-lg'><IoLogoJavascript className='mr-1'/>Javascript</li>
                        <li className='flex items-center text-lg'><FaReact className='mr-1'/>React</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills