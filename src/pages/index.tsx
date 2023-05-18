import Email from '@/components/Email'
import Socials from '@/components/Socials'
import About from '@/sections/About'
import Experience from '@/sections/Experience'
import Home from '@/sections/Home'
import Navbar from '@/sections/Navbar'
import Projects from '@/sections/Projects'
import React from 'react'

const Index = () => {
  return (
    <div className='app'>
      <Navbar />
      <Socials />
      <Email />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  )
}

export default Index