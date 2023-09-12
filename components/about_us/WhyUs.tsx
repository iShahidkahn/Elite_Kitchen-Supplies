import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
    return (
        <>
            <div className='why-us md:mx-20 lg:mx-32 my-10'>
                <h1 className='text-center font-bold uppercase my-12' style={{ fontSize: "36px", lineHeight: "120%" }}>
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
            </div>
            <div className="heading my-12">
                <h1 className='text-center text-3xl uppercase'>
                    Contact Us
                </h1>
            </div>
            <div className='md:mx-10 lg:mx-20 border p-8 rounded'>
                <div className="md:grid grid-cols-4">
                    <div className="col-span-5">
                        <h1 className='text-2xl uppercase mb-10'>visit our showroom:</h1>
                    </div>
                    <div className="col-span-2 border mx-1">
                        <div className='my-5'>
                            <h1 className='text-lg font-medium uppercase'>SHOWROOM ADDRESS:</h1>
                            <p className='text-sm font-normal leading-5' style={{ color: "#6A5A49" }}>4884 Dufferin Street, <br />
                                Toronto, ON, Canada, M3H 5T4
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h1 className='text-lg font-medium uppercase'>CALL US:</h1>
                            <p className='text-sm font-normal leading-5' style={{ color: "#6A5A49" }}>+1 416-663-7888</p>
                        </div>
                    </div>
                    <div className="col-span-2 border mx-1">
                        <div className='my-5'>
                            <h1 className='text-lg font-medium uppercase'>TIMING:</h1>
                            <div className="border w-2/4">
                                <div className="flex justify-between">
                                    <p className='text-sm font-normal leading-5' style={{ color: "#6A5A49" }}>
                                        Monday - Friday:
                                    </p>
                                    <p className='text-sm font-normal leading-5' style={{ color: "#6A5A49" }}>
                                        10 am to 6 pm
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <p className='text-sm font-normal leading-5' style={{ color: "#6A5A49" }}>
                                        Saturday:
                                    </p>
                                    <p className='text-sm font-normal leading-5' style={{ color: "#6A5A49" }}>
                                        10 am to 6 pm
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <p className='text-sm font-normal leading-5' style={{ color: "#6A5A49" }}>
                                        Sunday:
                                    </p>
                                    <p className='text-sm font-normal leading-5' style={{ color: "#6A5A49" }}>
                                        By Appointment
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='my-5'>
                            <h1 className='text-lg font-medium uppercase'>EMAIL:</h1>
                            <p className='text-sm font-normal leading-5' style={{ color: "#6A5A49" }}>info@EliteKBF.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default WhyUs