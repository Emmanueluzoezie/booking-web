import Image from 'next/image'
import React from 'react'
import logo from "../public/logodark.png"
import { MdSearch, MdMenu, MdOutlineShoppingCart } from "react-icons/md"
import { useContextState } from '../context/context'

const Header = () => {
    const {sidebar, setSidebar} = useContextState()
  return (
    <nav className='flex items-center justify-between p-6'>
        <div className='w-[50px]'>
            <Image src={logo} alt="logo"/>
        </div>
        <div className='flex items-center text-2xl font-semibold space-x-3'>
              <MdMenu className='cursor-pointer text-3xl' onClick={() => setSidebar( prev => !prev)}/>
              <MdSearch className='cursor-pointer'/>
              <div className='relative'>
                  <MdOutlineShoppingCart className='cursor-pointer'/>
                  <span className='absolute top-[-15px] right-0 font-bold text-xl'>0</span>
              </div>
              <button className='text-sm font-bold rounded-md bg-blue-500 px-3 py-1 text-white'>Join us</button>
        </div>
    </nav>
  )
}

export default Header