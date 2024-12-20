import React from 'react'

const About = () => {
  return (
    <div className='bg-sky-500 text-white  p-4'>
      <div className='flex w-1/2 justify-center mx-auto'>
        <img src="/profile_picture.jpeg" alt="" className='w-60'/>
        <div className='ml-2'>
          <p className='text-left'>Hello, My name is</p>
          <h1 className='text-3xl text-left font-bold'>Exequiel Isajara</h1>
          <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatum nesciunt cupiditate, inventore quod quia modi architecto? Rerum nemo porro assumenda qui dicta cumque excepturi quod magni id provident. Temporibus adipisci nulla quod, quia aperiam ipsa animi perspiciatis, sapiente illum praesentium illo nesciunt eos modi voluptatibus. Dicta quae minus pariatur.</p>
        </div>
      </div>
    </div>
  )
}

export default About