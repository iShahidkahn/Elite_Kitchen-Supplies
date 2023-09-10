import BookUS from '@/components/constants/BookMeeting'
import JoinUs from '@/components/constants/JoinUs'
import Details from '@/components/product_details/Details'
import ProductDetails from '@/components/product_details/ProductDetails'
import React from 'react'

const page = () => {
  return (
    <>
      <ProductDetails />
      <div className='wrapper'>
        <BookUS />
        <JoinUs />
      </div>

    </>
  )
}

export default page