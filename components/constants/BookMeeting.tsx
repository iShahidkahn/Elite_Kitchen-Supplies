import Image from 'next/image'
import React from 'react'

const BookUS = () => {
  return (

    <div className="book-meeting relative flex items-center my-5">
      <Image src="/images/book_a_meeting.svg" width={0} height={0} alt="book us" className="w-full" />
      <div className="absolute ms-20">
        <h1>build your dream <br /> room today!</h1>
        <button className='mt-5 flex'>book a meeting
          <Image src='/icons/arrow_top.svg' className="my-auto ms-2" width={16} height={0} alt="icon" />
        </button>
      </div>
    </div>

  )
}

export default BookUS