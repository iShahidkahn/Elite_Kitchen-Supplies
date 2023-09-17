'use client'
import React, { useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import Counter from "@/components/Counter";
import Description from "./Description";
import Link from "next/link";
import ProductImages from "./ProductImages";

interface DetailsProps { }

const sliderData = [
    {
        product_image: "/images/products/p1.svg",
    },
    {
        product_image: "/images/products/p2.svg",
    },
    {
        product_image: "/images/products/p3.svg",
    },
    {
        product_image: "/images/products/p4.svg",
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
        autoplay: true,
        autoplaySpeed: 4000,
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickPlay();
        }
    }, []);

    return (
        <div className="wrapper">
            <div className="product-details">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <ProductImages />
                    {/*------------------ Mobile Phone/ Tab etc */}
                    <div className="caro-product-details mb-16 md:hidden">
                        <Slider ref={sliderRef} {...settings}>
                            {sliderData.map((slide, index) => {
                                return (
                                    <div key={index} >
                                        <Image src={slide.product_image} width={100} height={100} className="w-full" alt="product" />
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
