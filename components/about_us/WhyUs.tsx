import Image from 'next/image'
import React from 'react'
import Search from '../constants/Search'

const WhyUs = () => {
    return (
        <div className='why-us md:mx-20 lg:mx-32 my-10'>
            <h1 className='text-center font-bold uppercase my-12' style={{fontSize:"36px", lineHeight:"120%"}}>
                Why choose Elite <br />
                Kitchen and Bath
            </h1>
            <div className="md:grid grid-cols-5">
                <div className="col-span-3 flex items-center" >
                    <div className='left-sec md:me-5'>
                        <h2>Welcome to Elite Kitchen and Bath</h2>
                        <h1 className='mb-5'>Innovation in Lifestyle</h1>
                        <p className='mb-7'>At Elite KITCHEN and BATH we provide the finest bath and kitchen fixtures to developers and designers of a variety of residential and commercial projects, including condominiums and townhouses.</p>
                        <p>We carry a wide selection of products with an extensive collection of free standing bathtubs, kitchen and bath faucets, kitchen sinks, natural marble stone sinks, resin and ceramic vessel sinks, toilets, drains, bathroom accessories and vanities, along with unique resin wall paneling, hardware and more.</p>
                    </div>
                </div>
                <div className="col-span-2 flex justify-end">
                    <Image src="/images/about_us.svg" width={320} height={0} alt='image' className='' />
                </div>
            </div>
            <div>
                <Search />
            </div>
        </div>
    )
}

export default WhyUs