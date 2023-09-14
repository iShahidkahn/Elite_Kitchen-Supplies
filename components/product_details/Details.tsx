'use client'

import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';

const productDetails = [
    {
        id: 'ProductDetail',
        name: 'product detail',
        details: 'Combining architectural forms with sensual design lines, Purist faucets and accessories bring a touch of modern elegance to your bathroom. This sink faucet exemplifies the Purist\'s understated style, with its low gooseneck spout and lever handles. Easy-to-install and leak-free UltraGlide valves provide reliable performance and durability. And the spout features laminar flow, which helps conserve water while preventing splashing.'
    },
    {
        id: 'features',
        name: 'features',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum possimus facere aliquid commodi suscipit error, excepturi debitis in omnis laudantium vel molestias, ratione quasi, adipisci perspiciatis dolorem? Non, cupiditate velit?',
    },
    {
        id: 'dimensions',
        name: 'dimensions',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum possimus facere aliquid commodi suscipit error, excepturi debitis in omnis laudantium vel molestias, ratione quasi, adipisci perspiciatis dolorem? Non, cupiditate velit?',
    },
    {
        id: 'resources',
        name: 'resources',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum possimus facere aliquid commodi suscipit error, excepturi debitis in omnis laudantium vel molestias, ratione quasi, adipisci perspiciatis dolorem? Non, cupiditate velit?',
    },
];


const Details = () => {
    return (
        <div className="bg-white">
            <main className="mx-auto mt-8 px-0 md:px-0">
                <section>
                    <div className="">
                        {productDetails.map((section) => (
                            <Disclosure as="div" key={section.id} className="py-6">
                                {({ open }) => (
                                    <>
                                        <h3 className="-my-3 flow-root">
                                            <Disclosure.Button className="flex w-full items-center justify-between py-3 px-1" style={{ borderBottom: '1px solid #E9D9C9' }}>
                                                <span className="uppercase font-semibold" style={{ fontSize: "14px", lineHeight: '130%' }}>
                                                    {section.name}
                                                </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 ${open ? 'transform rotate-180' : ''}`}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
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
                                                    <p className='px-1'>{section.details}</p>
                                                </Disclosure.Panel>
                                            )}
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Details;

