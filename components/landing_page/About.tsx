import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className="about-wrapper relative" style={{ height: '850px' }}>
            <h1 className="text-center text-4xl Class ">
                We are passionate about Bath Fittings that enrich lives and transforms spaces.
            </h1>
            <p className="text-center px-10">
                We are passionate about selling products that enrich lives and transforms spaces. With a deep appreciation for craftsmanship and a commitment to exceptional quality, we strive to offer kitchen and bath pieces that combine timeless elegance with modern functionality.
            </p>
            <div className="absolute bottom-40 z-20 w-full flex flex-col items-center justify-center">
                <Image src="/images/lp_about.svg" width={1000} height={0} alt="about" />
            </div>
            <div className="absolute w-full bottom-0 z-10 flex items-center justify-center" style={{ height: '388px', background: "#F2E8DE" }}>
                <div className='absolute bottom-20 flex items-center justify-between' style={{ width: "800px", padding: '10px 0' }}>
                    <div className=''>
                        <h1 className='text-3xl font-semibold'>
                            100,000+
                            <span className='font-thin text-base'>
                                Total Products
                            </span>
                        </h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About