import Image from 'next/image'
import React from 'react'
// import Map from './Map'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="hidden md:grid grid-cols-5 gap-4">
                    <div className='col-span-2'>
                        <Image src="/logo_light.svg" width={65} height={0} alt='footer-logo' />
                        <p className='my-6 me-5' style={{ opacity: "1" }}>
                            At Elite KITCHEN and BATH we provide the finest bath and kitchen fixtures to developers and designers of a variety of residential
                            and commercial projects.
                        </p>
                        <div>
                            {/* <Map /> */}
                        </div>
                    </div>
                    <div>
                        <h1 className='my-6'>
                            ABOUT US
                        </h1>
                        <p>4884 Dufferin Street, <br />
                            Toronto, ON, <br />
                            Canada M3H 5T4
                        </p>
                        <p className='leading-10'>
                            Tel +14166637888
                        </p>
                        <p>
                            info@EliteKBF.com
                        </p>
                        <div className="social flex gap-2 my-4">
                            <Link href="#">
                                <Image src="/icons/fb_white.svg" className="ic" width={20} height={0} alt='fb' />
                            </Link>
                            <Link href="#" >
                                <Image src="/icons/instagram_white.svg" className="ic" width={20} height={0} alt='fb' />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='mt-6 mb-4'>
                            NAVIGATE
                        </h1>
                        <p className='leading-9'>
                            <Link href="#" className='link'>About</Link><br />
                            <Link href="/contact" className='link'>Contact Us </Link> <br />
                            <Link href="bathroom" className='link'>Bathroom Fixtures</Link>  <br />
                            <Link href="#" className='link'>Kitchen Fixtures</Link> <br />
                            <Link href="/lighting" className='link'>Lighting</Link>  <br />
                            <Link href="#" className='link'>View All</Link>
                        </p>
                    </div>
                    <div>
                        <h1 className="my-6">
                            HOURS OF OPERATION
                        </h1>
                        <p className='leading-7'>
                            Mon-Fri: 10:00am-6:00pm <br />
                            Saturday: 10:00am-4:00pm <br />
                            Sunday: By Appointment
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom flex justify-between items-center">
                <div>
                    © 2023 EliteKBF | Powered by OnOrder
                </div>
                <div className="flex gap-2">
                    <Image src="/images/c1.svg" width={26} height={0} alt='card' />
                    <Image src="/images/c2.svg" width={26} height={0} alt='card' />
                    <Image src="/images/c3.svg" width={26} height={0} alt='card' />
                    <Image src="/images/c4.svg" width={26} height={0} alt='card' />
                    <Image src="/images/c5.svg" width={26} height={0} alt='card' />
                </div>
            </div>
        </>


    )
}

export default Footer