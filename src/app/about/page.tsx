import React from 'react'
import Titlebar from './Titlebar'
import Whyus from './Whyus'
import Contact from './Contact'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <>
    <Navbar />
    <Titlebar />
    <Whyus />
    <Contact />
    </>
  )
}

export default page