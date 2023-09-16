import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
    return (
        <div className='my-20 mx-4 sm:mx-6 md:mx-10'>
            <div className="flex items-center justify-between mb-6 sm:mb-16">
                <div>
                    <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold uppercase leading-10'>brands we carry</h1>
                    <p className='text-sm' style={{ color: "#6A5A49" }}>Fresh styles, new beginnings: discover our latest arrivals!</p>
                </div>
                <div>
                    <Link href='/book_meeting' className='hidden sm:block'>
                        <button className="secondary-button flex uppercase" style={{ color: "inherit" }}>
                            View all
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-6 transform rotate-45">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='my-3'>
                <Image src='/images/product_list.svg' width={2000} height={100} alt='product_list' className='hidden sm:block' />
                <Image src='/images/brand1_sm.svg' width={100} height={100} alt='product_list' className='w-full sm:hidden' />
                <Image src='/images/brand2_sm.svg' width={100} height={100} alt='product_list' className='w-full sm:hidden' />
            </div>
            <div className="flex justify-center">
                <Link href='/book_meeting' className='sm:hidden'>
                    <div className="heroButton text-center">
                        <button className="secondary-button flex uppercase" style={{ color: "inherit" }}>
                            View all
                            <Image src='/icons/arrow_top.svg' className="my-auto ms-1" width={16} height={0} alt="icon" />
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProductList
