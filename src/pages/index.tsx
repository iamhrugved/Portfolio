import Email from '@/components/Email'
import Socials from '@/components/Socials'
import Home from '@/sections/Home'
import Navbar from '@/sections/Navbar'
import React from 'react'

const Index = () => {
  return (
    <div className='app'>
      <Navbar />
      <Socials />
      <Email />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default Index