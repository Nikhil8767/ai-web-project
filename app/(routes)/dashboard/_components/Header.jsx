import Logo from '@/app/_components/Logo'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-3 shadow-sm'>
        <Logo />
        <UserButton/>
    </div>
  )
}

export default Header