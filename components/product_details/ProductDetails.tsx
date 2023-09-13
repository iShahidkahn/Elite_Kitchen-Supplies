'use client'
import React from 'react';
import Details from './Details';
import Image from 'next/image';
import Counter from '../cart_details/Counter';

const ProductDetails = () => {
    return (
        <div className="wrapper">
            <div className="product-details">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="grid md:grid-cols-6 grid-cols-1">
                        <div className='mx-auto'>
                            <Image src="/images/products/p1_sm.svg" width={200} height={200} alt="product one" className='me-auto rounded mb-2' />
                            <Image src="/images/products/p2_sm.svg" width={200} height={200} alt="product one" className='me-auto rounded my-2' />
                            <Image src="/images/products/p3_sm.svg" width={200} height={200} alt="product one" className='me-auto rounded my-2' />
                            <Image src="/images/products/p4_sm.svg" width={200} height={200} alt="product one" className='me-auto rounded my-2' />
                        </div>
                        <div className="col-span-5 mx-auto">
                            <Image src="/images/products/p1.svg" width={400} height={400} alt="product one" className='mx-auto' />
                            <Image src="/images/products/p2.svg" width={400} height={400} alt="product one" className='mx-auto' />
                            <Image src="/images/products/p3.svg" width={400} height={400} alt="product one" className='mx-auto' />
                            <Image src="/images/products/p4.svg" width={400} height={400} alt="product one" className='mx-auto' />
                        </div>
                    </div>
                    <div className="px-2">
                        <h1 className="text-2xl uppercase font-bold">Kohler</h1>
                        <p className="leading-8" style={{ color: '#6A5A49', fontSize: '16px' }}>
                            Purist 1.2 GPM Widespread Bathroom Faucet with Pop-Up Drain Assembly
                        </p>
                        <p className="sm-text mt-1" style={{ color: '#6A5A49' }}>
                            Model: K-14406-4-2MB
                        </p>
                        <h1 className="uppercase font-bold my-2" style={{ fontSize: '20px' }}>
                            $ 704.64
                        </h1>
                        <p className="sm-text uppercase" style={{ color: '#6A5A49' }}>
                            MSRP STARTING AT
                        </p>
                        <div className="my-3">
                            <Counter />
                        </div>
                        <div>
                            <button className="btn">add to quote</button>
                        </div>
                        <div>
                            <Details />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
