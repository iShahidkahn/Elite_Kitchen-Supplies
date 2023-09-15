'use client'
import React, { useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import Counter from "@/components/Counter";
import Description from "./Description";
import Link from "next/link";

interface DetailsProps { }



const sliderData = [
    {
        product_image:"/images/products/p1.svg",
    },
    {
        product_image:"/images/products/p2.svg",
    },
    {
        product_image:"/images/products/p3.svg",
    },
    {
        product_image:"/images/products/p4.svg",
    },
    

]

const Details: React.FC<DetailsProps> = () => {

    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true, // Auto-scroll enabled
        autoplaySpeed: 4000, // Delay between each scroll (1 second in this case)

        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true,
        //         },
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //             initialSlide: 2,
        //         },
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         },
        //     },
        // ],
    };

    // Use useEffect to start the auto-scroll after the component mounts
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickPlay();
        }
    }, []);

    return (
        <div className="wrapper">
            <div className="product-details">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="hidden md:grid md:grid-cols-6 grid-cols-1">
                        <div className='mx-auto '>
                            <Image src="/images/products/p1_sm.svg" width={200} height={200} alt="product one" className='me-auto rounded mb-2 cursor-pointer' />
                            <Image src="/images/products/p2_sm.svg" width={200} height={200} alt="product one" className='me-auto rounded my-2 cursor-pointer' />
                            <Image src="/images/products/p3_sm.svg" width={200} height={200} alt="product one" className='me-auto rounded my-2 cursor-pointer' />
                            <Image src="/images/products/p4_sm.svg" width={200} height={200} alt="product one" className='me-auto rounded my-2 cursor-pointer' />
                        </div>
                        <div className="col-span-5 mx-auto">
                            <Image src="/images/products/p1.svg" width={400} height={400} alt="product one" className='mx-auto' />
                            <Image src="/images/products/p2.svg" width={400} height={400} alt="product one" className='mx-auto' />
                            <Image src="/images/products/p3.svg" width={400} height={400} alt="product one" className='mx-auto' />
                            <Image src="/images/products/p4.svg" width={400} height={400} alt="product one" className='mx-auto' />
                        </div>
                    </div>
                    {/*------------------ Mobile Phone/ Tab etc */}
                    <div className="caro-product-details mb-16 md:hidden">
                        <Slider ref={sliderRef} {...settings}>
                            {sliderData.map((slide, index) => {
                                return (
                                    <div key={index} >
                                        <Image src={slide.product_image} width={100} height={400} className="w-full" alt="product"/>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                    {/*------------------ Mobile Phone/ Tab etc */}
                    <div className="px-2">
                        <h1 className="text-2xl uppercase font-bold">Kohler</h1>
                        <p className="leading-2 lg:leading-8" style={{ color: '#6A5A49', fontSize: '16px' }}>
                            Purist 1.2 GPM Widespread Bathroom Faucet with Pop-Up Drain Assembly
                        </p>
                        <p className="sm-text mt-1" style={{ color: '#6A5A49' }}>
                            Model: K-14406-4-2MB
                        </p>
                        <h1 className="uppercase font-bold my-3" style={{ fontSize: '20px' }}>
                            $ 704.64
                        </h1>
                        <p className="sm-text uppercase" style={{ color: '#6A5A49' }}>
                            MSRP STARTING AT
                        </p>
                        <div className="my-3">
                            <h2 className='font-medium uppercase mt-5 mb-2'>Quantity</h2>
                            <Counter />
                        </div>
                        <div className='my-5'>
                            <Link href="/quote">
                            <button className="btn">add to quote</button>

                            </Link>
                        </div>
                        <div>
                            <Description />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
