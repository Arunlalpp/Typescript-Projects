import React from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'
import appleLogo from './Images/AppleLogo.svg'
import globalCart from './Images/GlobalCart.svg'

function Header() {
  return (
    <div>
      <div className=''>
        <div className='bg-[#1d1d1f] w-full pr-2  mx-auto max-w-[90rem] h-[48px] flex flex-row justify-between items-center'>
            <button className='text-gray-500  inset-0'>

            <Hamburger size={18} />
            </button>
            <div>
            <img className='opacity-50' src={appleLogo} alt='Apple-logo' />
            </div>
                <img src={globalCart} alt='Global-cart' />
        </div>
      </div>
    </div>
  )
}

export default Header
