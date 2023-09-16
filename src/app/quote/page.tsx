import Navbar from '@/components/Navbar'
import React from 'react'
import Quantity from './Quantity'
import Footer from '@/components/Footer'
import TitleBar from './Titlebar'

const page = () => {
  const title = "request a quote"
  return (
    <>
    <Navbar />
    <TitleBar title={title}/>
    <Quantity />
    <Footer />
    </>
  )
}

export default page