import Email from '@/components/Email'
import Socials from '@/components/Socials'
import Navbar from '@/sections/Navbar'
import React from 'react'

const Index = () => {
  return (
    <div className='app'>
      <Navbar />
      <Socials />
      <Email />
    </div>
  )
}

export default Index