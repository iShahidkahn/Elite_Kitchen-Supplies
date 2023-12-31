import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <>
            <div className='px-3 sm:px-10  md:px-30 mb-14 md:mb-10 mt-10'>
                <h1 className="text-center text-xl  md:text-3xl font-semibold leading-7 md:leading-10 uppercase">
                    We are passionate about Bath Fittings that enrich lives and <br className='hidden lg:block'/> transforms spaces.
                </h1>
                <p className="text-center font-sm font-normal mt-2" style={{ color: "#947D66", lineHeight: "180%" }}>
                    We are passionate about selling products that enrich lives and transforms spaces. With a deep appreciation for craftsmanship and a <br className='hidden lg:block'/> commitment to  exceptional quality, we strive to offer kitchen and bath pieces that combine timeless elegance with modern functionality.
                </p>
            </div>
            <div className="relative lp-about -mt-8 sm:-mt-5 ">
                <div className="absolute bottom-0 md:bottom-28 w-full z-20">
                    <div className='container mx-auto px-2'>
                        <div className='w-full max-w-screen-lg mx-auto py-20'>
                            <div className='flex items-center justify-center'>
                                <Image src="/images/lp_about.svg" width={1200} className='md:w-full w-4/5' height={500} alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full z-10 h-3/5 md:h-2/4" style={{ background: "#F2E8DE" }}>
                    <div className='w-full absolute bottom-5 md:bottom-16 mx-auto'>
                        <div className='flex items-center md:mb-2 justify-between items-center px-7 md:px-20 md:px-32'>
                            <div className='md:flex items-center gap-3 text-center md:text-start'>
                                <h1 className='text-sm md:text-4xl font-semibold uppercase'>
                                    100,000 +
                                </h1>
                                <p className='font-thin text-xs md:text-sm	font-normal	md:leading-4 r' style={{ color: "#947D66" }}>
                                    Total <br className='hidden md:block' /> Products
                                </p>
                            </div>
                            <div className='md:flex items-center gap-3 text-center md:text-start'>
                                <h1 className='text-sm md:text-4xl font-semibold uppercase'>
                                    1,000 +
                                </h1>
                                <p className='font-thin text-xs md:text-sm	font-normal	md:leading-4' style={{ color: "#947D66" }}>
                                    Happy <br className='hidden md:block' /> Customers
                                </p>
                            </div>
                            <div className='md:flex items-center gap-3 text-center md:text-start'>
                                <h1 className='text-sm md:text-4xl font-semibold uppercase'>
                                    10 +
                                </h1>
                                <p className='font-thin text-xs md:text-sm	font-normal	md:leading-4' style={{ color: "#947D66" }}>
                                    Years <br className='hidden md:block' /> in Industry
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About
