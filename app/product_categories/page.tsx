import BookMeeting from '@/components/constants/BookMeeting'
import JoinUs from '@/components/constants/JoinUs'
import FilterandSort from '@/components/product_categories/Products'
import TitleBar from '@/components/product_categories/TitleBar'
import React from 'react'

const page = () => {
  return (
    <div>
        <TitleBar />
        <div className="wrapper">
            <FilterandSort />
            <BookMeeting />
            <JoinUs />
        </div>
    </div>
  )
}

export default page