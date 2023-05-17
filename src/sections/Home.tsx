import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div className='home'>
        <h1 className='home-title'>
            Hi, my name is
        </h1>
        <h2 className="home-title-large">
            Hrugved Pawar.
        </h2>
        <h3 className="home-title-large home-title-sub">
            I craft things for Web.
        </h3>
        <p className="home-text">
            I&apos;m a software engineer with expertise in creating top-notch digital experiences. 
            My current focus is on developing products that are accessible and centered around user needs, 
            as part of the team at&nbsp;
            <Link href="https://www.inlumon.com/" target="_blank" className="link">inLumon.</Link>
        </p>
    </div>
  )
}

export default Home