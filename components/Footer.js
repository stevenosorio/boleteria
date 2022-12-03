import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div >
      <footer className='flex justify-center shadow-lg rounded-2xl mt-5'>
          <span className='justify-center font-bold flex '>
            Powered by{' '}
            <Image src="/images/boleteria-logo.png" alt="Logo" width={72} height={16} className=''/>
          </span>
      </footer>
    </div>
  )
}

export default Footer
