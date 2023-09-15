import React from 'react'
import Image from 'next/image'

const Titlebar = () => {
    return (
        <div>
            <Image src="/images/request_quote_title.png" width={1200} height={0} alt="title" className='w-full' />
        </div>
    )
}

export default Titlebar