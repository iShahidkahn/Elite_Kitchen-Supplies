import Navbar from '@/components/Navbar'
import React from 'react'
import Details from './Details'
import SingleOffer from '@/components/SingleOffer'
import Newsletter from '@/components/Newsletter'

const page = () => {
  return (
    <>
     <Navbar />
     <Details />
     <SingleOffer />
     <Newsletter />
    </>
  )
}

export default page