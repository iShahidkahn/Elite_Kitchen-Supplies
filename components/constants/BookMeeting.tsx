import React from 'react'

const BookUS = () => {
  return (

    <div className="book-meeting relative flex items-center my-5">
      <div className="absolute top-10 left-10">
        <h1 className='text-xl md:text-2xl lg:3xl text-white font-semibold uppercase'>build your dream <br /> room today!</h1>
        <button className='heroButton mt-3 md:mt-5 flex items-center gap-2'>book a meeting
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-6 transform rotate-45">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
          </svg>
        </button>
      </div>
    </div>

  )
}

export default BookUS