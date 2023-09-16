import Image from 'next/image'

const Whyus = () => {
    return (
        <>
            <div className='mx-5 sm:mx-5 md:mx-20 lg:mx-32 my-10'>
                <h1 className='text-center font-bold uppercase my-12' style={{ fontSize: "36px", lineHeight: "120%" }}>
                    Why choose Elite <br />
                    Kitchen and Bath
                </h1>
                <div className="block md:flex md:items-center">
                    <div className="w-full about-w">
                        <div className='left-sec me-0 sm:me-5'>
                            <h2>Welcome to Elite Kitchen and Bath</h2>
                            <h1 className='mb-5'>Innovation in Lifestyle</h1>
                            <p className='mb-7'>At Elite KITCHEN and BATH we provide the finest bath and kitchen fixtures to developers and designers of a variety of residential and commercial projects, including condominiums and townhouses.</p>
                            <p>We carry a wide selection of products with an extensive collection of free standing bathtubs, kitchen and bath faucets, kitchen sinks, natural marble stone sinks, resin and ceramic vessel sinks, toilets, drains, bathroom accessories and vanities, along with unique resin wall paneling, hardware and more.</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <Image src="/images/about_us.svg" width={10} height={10} alt='image' style={{ width: "400px" }} className='sm:w-80 w-full my-3 sm:my-0' />
                    </div>
                </div>
            </div>
            <div className="heading mt-20 mb-12">
                <h1 className='text-center text-3xl uppercase font-semibold	'>
                    Contact Us
                </h1>
            </div>
            <div className='mx-5 sm:mx-10 lg:mx-20 lg:mx-20 border py-5 px-3 sm:p-8 rounded'>
                <div className="md:grid grid-cols-4">
                    <div className="col-span-5">
                        <h1 className='text-2xl uppercase mb-10 font-semibold'>visit our showroom:</h1>
                    </div>
                    <div className="col-span-2 mx-1">
                        <div className='sm:my-5 mb-2 sm:mb-0'>
                            <h1 className='text-lg font-medium uppercase'>SHOWROOM ADDRESS:</h1>
                            <p className='text-sm font-normal leading-5' style={{ color: "#6A5A49" }}>4884 Dufferin Street, <br />
                                Toronto, ON, Canada, M3H 5T4
                            </p>
                        </div>
                        <div className='mt-10 hidden sm:block'>
                            <h1 className='text-lg font-medium uppercase'>CALL US:</h1>
                            <p className='text-sm font-normal leading-5' style={{ color: "#6A5A49" }}>+1 416-663-7888</p>
                        </div>
                    </div>
                    <div className="col-span-2 mx-1 sm:hidden mt-3 sm:mt-0">
                        <div className='sm:my-5'>
                            <h1 className='text-lg font-medium uppercase'>TIMING:</h1>
                            <div className=" w-4/5 md:w-2/3">
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
                                    <p className='text-sm font-normal leading-5 ms-10' style={{ color: "#6A5A49" }}>
                                        By Appointment
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-14 mt-5'>
                            <div className=''>
                                <h1 className='text-lg font-medium uppercase'>CALL US:</h1>
                                <p className='text-sm font-normal leading-5' style={{ color: "#6A5A49" }}>+1 416-663-7888</p>
                            </div>
                            <div className=''>
                                <h1 className='text-lg font-medium uppercase'>EMAIL:</h1>
                                <p className='text-sm font-normal leading-5' style={{ color: "#6A5A49" }}>info@EliteKBF.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 mx-1 hidden sm:block">
                        <div className='my-5'>
                            <h1 className='text-lg font-medium uppercase'>TIMING:</h1>
                            <div className="w-3/4 md:w-2/3">
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

export default Whyus