import TitleBar from '@/app/products/TitleBar'
import Navbar from '@/components/Navbar'
import React from 'react'
import Sent from './Sent'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
    <Navbar />
    <TitleBar />
    <Sent />
    <Footer />
    </>
  )
}

export default page