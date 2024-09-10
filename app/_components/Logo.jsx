import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
        <Image src={'/logo.png'} alt='logo' width={30} height={30}/>
        <h2 className='font-bold text-xl'>Syncai</h2>
    </div>
  )
}

export default Logo