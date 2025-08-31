import React, { useState } from 'react'


const Navbar = () => {
  

  return (
    <nav className='bg-green-600 shadow-lg flex justify-between items-center rounded-2xl text-white px-4 h-15 mx-auto max-w-7xl my-5 relative'>
      <div className="logo text-xl font-bold tracking-wider">
        <span className='text-black text-2xl'>&lt;</span>
        Pass<span className='text-xl text-green-900'>OP</span><span className='text-black text-2xl'>/&gt;</span>
      </div>
        
      <ul className='hidden min-[768px]:block'>
        <li className='flex gap-10'>
          <a className='rounded-lg text-lg hover:font-bold w-[75px] transition-all duration-200 ease-in-out text-center hover:bg-green-700' href="/">Home</a>
          <a className='rounded-lg text-lg hover:font-bold w-[75px] transition-all duration-200 ease-in-out text-center hover:bg-green-700' href="/about">About</a>
          <a className='rounded-lg text-lg hover:font-bold w-[75px] transition-all duration-200 ease-in-out text-center hover:bg-green-700' href="/contact">Contact</a>
        </li>
      </ul>

      


        <div className=' rounded-2xl shadow-lg min-[768px]:hidden'>
          <ul className='flex p-1'>
            <li><a className=' rounded-lg hover:font-bold px-3 py-2 transition-all duration-200 ease-in-out hover:bg-green-700' href="/" >Home</a></li>
            <li><a className=' rounded-lg  hover:font-bold px-3 py-2 transition-all duration-200 ease-in-out hover:bg-green-700' href="/about" >About</a></li>
            <li><a className=' rounded-lg  hover:font-bold px-3 py-2 transition-all duration-200 ease-in-out hover:bg-green-700' href="/contact" >Contact</a></li>
          </ul>
        </div>
      
    </nav>
  )
}

export default Navbar