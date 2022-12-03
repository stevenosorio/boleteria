import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <header className='flex my-6 w-full shadow-lg rounded-lg'>
        <Link href="/"> <Image src="/images/boleteria-logo.png" alt="Logo" width={76} height={100} className='mr-20' /> </Link>  
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 h-14"><Link href="/register">Sign Up - Customer</Link></button>
        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-semibold rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 h-14"><Link href="/registerV">Sign Up - Seller</Link></button>
        <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 h-14"><Link href="/login">Login</Link></button>

      </header>
    </div>
  )
}

export default Header
