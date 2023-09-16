import React from 'react'

import Titlebar from './Titlebar'
import Whyus from './Whyus'
import Contact from './Contact'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
    
    <Navbar />
    <Titlebar />
    <Whyus />
    <Contact />
    <Footer />
    </>
  )
}

export default page