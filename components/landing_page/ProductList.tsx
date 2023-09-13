import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
    return (
        <div>
            <div className="flex items-center justify-between mx-4">
                <div>
                    <h1 className='text-4xl font-bold'>brands we carry</h1>
                    <p>Fresh styles, new beginnings: discover our latest arrivals!</p>
                </div>
                <div>
                    <Link href='/book_meeting'>
                        <div className="heroButton text-center mx-auto mt-6">
                            <button className="secondary-button flex uppercase" style={{ color: "inherit" }}>
                                View all
                                <Image src='/icons/arrow_top.svg' className="my-auto ms-1" width={16} height={0} alt="icon" />
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
            <Image src='/images/product_list.svg' width={2000} height={100} alt='product_list' />
        </div>
    )
}

export default ProductList