import Email from '@/components/Email'
import Socials from '@/components/Socials'
import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Experience from '@/sections/Experience'
import Home from '@/sections/Home'
import Navbar from '@/sections/Navbar'
import Projects from '@/sections/Projects'
import Loader from '@/components/Loader'
import Footer from '@/sections/Footer'
import Head from 'next/head'
import React, { useState } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className="app">
      <Head>
        <title>Hrugved Pawar</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {showContent && (
        <>
          <Navbar />
          <Socials />
          <Email />
          <main>
            <Home />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
}

export default Index