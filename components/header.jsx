import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className= "fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b"> 
    <nav className='container mx-auto flex justify-between items-center py-4 px-4  '>
      <Link href="/">
      <Image
      src={"/logo.png"} alt=' Welth logo' width={200} height={60} 
      className='h-12 w-auto object-contain'
      />
      </Link>
    
    <SignedOut>
    <SignInButton />
  </SignedOut>
  <SignedIn>
    <UserButton />
  </SignedIn>
  </nav>
  </div>
  )
}

export default Header