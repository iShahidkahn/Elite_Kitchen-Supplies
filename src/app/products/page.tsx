import React from 'react'
import TitleBar from './TitleBar'
import Products from './Products'
import SingleOffer from '@/components/SingleOffer'
import Newsletter from '@/components/Newsletter'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
    <Navbar />
    <TitleBar />
    <Products />
    <SingleOffer />
    <Newsletter />
    <Footer />
    </>
  )
}

export default page