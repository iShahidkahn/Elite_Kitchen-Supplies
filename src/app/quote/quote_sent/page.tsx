import Navbar from '@/components/Navbar'
import React from 'react'
import Sent from './Sent'
import Footer from '@/components/Footer'
import TitleBar from '../Titlebar'

const page = () => {
  
  const title = "request sent"

  return (
    <>
      <Navbar />
      <TitleBar title={title} />
      <Sent />
      <Footer />
    </>
  )
}

export default page