'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import MapLayout from './map/MapLayout'
import { Disclosure, Transition } from '@headlessui/react';


const Footer = () => {

    return (
        <>
            <div className="footer px-5 pt-12 pb-8 md:py-12 md:px-10">
                <div className="grid grid-cols-5 gap-4">
                    <div className='col-span-5 md:col-span-2'>
                        <Image src="/logo_light.svg" width={65} height={0} alt='footer-logo' />
                        <p className='my-6 me-5' style={{ opacity: "1" }}>
                            At Elite KITCHEN and BATH we provide the finest bath and kitchen fixtures to developers and designers of a variety of residential
                            and commercial projects.
                        </p>
                        <div>
                            <MapLayout />
                        </div>
                    </div>
                    <div className='hidden md:block'>
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
                    <div className='hidden md:block'>
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
                    <div className='hidden md:block'>
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
                {/* Mobile Footer */}
                <div className="md:hidden">
                    {/* About Us */}
                    <Disclosure as="div" className="py-6 mt-8">
                        {({ open }) => (
                            <>
                                <h3 className="-my-3 flow-root">
                                    <Disclosure.Button className="flex w-full items-center justify-between py-1">
                                        <span className="uppercase font-semibold text-white" style={{ fontSize: "14px", lineHeight: '130%' }}>
                                            About us
                                        </span>


                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-4 h-4 ${open ? 'transform rotate-180' : ''}`} style={{ color: "white" }}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>

                                    </Disclosure.Button>
                                </h3>
                                <Transition
                                    show={open}
                                    enter="transition-opacity ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity ease-in duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    {(ref) => (
                                        <Disclosure.Panel
                                            ref={ref}
                                            className="pt-6"
                                            static
                                        >
                                            <div>
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
                                            </div>
                                        </Disclosure.Panel>
                                    )}
                                </Transition>
                            </>
                        )}
                    </Disclosure>
                    {/* Navigate */}
                    <Disclosure as="div" className="py-6 mt-2">
                        {({ open }) => (
                            <>
                                <h3 className="-my-3 flow-root">
                                    <Disclosure.Button className="flex w-full items-center justify-between py-1">
                                        <span className="uppercase font-semibold text-white" style={{ fontSize: "14px", lineHeight: '130%' }}>
                                            Navigate
                                        </span>


                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-4 h-4 ${open ? 'transform rotate-180' : ''}`} style={{ color: "white" }}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>

                                    </Disclosure.Button>
                                </h3>
                                <Transition
                                    show={open}
                                    enter="transition-opacity ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity ease-in duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    {(ref) => (
                                        <Disclosure.Panel
                                            ref={ref}
                                            className="pt-6"
                                            static
                                        >
                                            <div>
                                                <p className='leading-9'>
                                                    <Link href="#" className='link'>About</Link><br />
                                                    <Link href="/contact" className='link'>Contact Us </Link> <br />
                                                    <Link href="bathroom" className='link'>Bathroom Fixtures</Link>  <br />
                                                    <Link href="#" className='link'>Kitchen Fixtures</Link> <br />
                                                    <Link href="/lighting" className='link'>Lighting</Link>  <br />
                                                    <Link href="#" className='link'>View All</Link>
                                                </p>
                                            </div>
                                        </Disclosure.Panel>
                                    )}
                                </Transition>
                            </>
                        )}
                    </Disclosure>

                    {/* Navigate */}
                    <Disclosure as="div" className="py-6 mt-2">
                        {({ open }) => (
                            <>
                                <h3 className="-my-3 flow-root">
                                    <Disclosure.Button className="flex w-full items-center justify-between py-1">
                                        <span className="uppercase font-semibold text-white" style={{ fontSize: "14px", lineHeight: '130%' }}>
                                            HOURS OF OPERATION
                                        </span>


                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-4 h-4 ${open ? 'transform rotate-180' : ''}`} style={{ color: "white" }}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>

                                    </Disclosure.Button>
                                </h3>
                                <Transition
                                    show={open}
                                    enter="transition-opacity ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity ease-in duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    {(ref) => (
                                        <Disclosure.Panel
                                            ref={ref}
                                            className="pt-6"
                                            static
                                        >
                                            <div>
                                                <p className='leading-7'>
                                                    Mon-Fri: 10:00am-6:00pm <br />
                                                    Saturday: 10:00am-4:00pm <br />
                                                    Sunday: By Appointment
                                                </p>
                                            </div>
                                        </Disclosure.Panel>
                                    )}
                                </Transition>
                            </>
                        )}
                    </Disclosure>

                    <div className="social flex gap-2 mt-2">
                        <Link href="#">
                            <Image src="/icons/fb_white.svg" className="ic" width={20} height={0} alt='fb' />
                        </Link>
                        <Link href="#" >
                            <Image src="/icons/instagram_white.svg" className="ic" width={20} height={0} alt='fb' />
                        </Link>
                    </div>
                </div>

                {/* End Mobile Footer */}


            </div>









            <div className="footer-bottom block md:flex justify-between items-center text-center md:text-left">
                <div>
                    © 2023 EliteKBF | Powered by OnOrder
                </div>
                <div className="mt-3 md:mt-0 flex flex-wrap justify-center md:justify-start gap-2">
                    <img src="/images/c1.svg" width="26" height="26" alt="card" />
                    <img src="/images/c2.svg" width="26" height="26" alt="card" />
                    <img src="/images/c3.svg" width="26" height="26" alt="card" />
                    <img src="/images/c4.svg" width="26" height="26" alt="card" />
                    <img src="/images/c5.svg" width="26" height="26" alt="card" />
                </div>
            </div>

        </>


    )
}

export default Footer