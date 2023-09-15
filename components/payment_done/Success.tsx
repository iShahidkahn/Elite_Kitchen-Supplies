import Image from 'next/image'
import React from 'react'

const Success = () => {
    return (
        <div className='w-full h-96	flex justify-center items-center'>
            <div>
                <div className='flex justify-center'>
                    <Image src="/icons/success.svg" width={120} height={120} alt='success' className='w-20 sm:w- 28' />
                </div>
                <h1 className='uppercase text-center text-xl sm:text-2xl md:text-3xl mt-3 mb-1' style={{ color: "#5DA34C" }}>thanks for Sending your quote!</h1>
                <p className='text-center'>The order confirmation has been sent to <br className='sm:hidden' /> user@gmail.com</p>
            </div>
        </div>
    )
}

export default Success