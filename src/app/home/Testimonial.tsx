
'use client'
import React, { useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

interface TestimonialProps { }

const sliderData = [
    {
        heading: "very great product",
        review: "Experience the epitome of style and comfort with our beautifully crafted wooden armchair that seamlessly blends timeless elegance with cozy relaxation.",
        user_img: "/images/users/person1.svg",
        user_name: "Guy Hawkins",
        place: "Orange",
    },
    {
        heading: "very great product",
        review: "Experience the epitome of style and comfort with our beautifully crafted wooden armchair that seamlessly blends timeless elegance with cozy relaxation.",
        user_img: "/images/users/person2.svg",
        user_name: "Marvin McKinney",
        place: "Austin",
    },
    {
        heading: "very great product",
        review: "Experience the epitome of style and comfort with our beautifully crafted wooden armchair that seamlessly blends timeless elegance with cozy relaxation.",
        user_img: "/images/users/person1.svg",
        user_name: "Robert Fox",
        place: "Fairfield",
    },
    {
        heading: "very great product",
        review: "Experience the epitome of style and comfort with our beautifully crafted wooden armchair that seamlessly blends timeless elegance with cozy relaxation.",
        user_img: "/images/users/person1.svg",
        user_name: "Guy Hawkins",
        place: "Orange",
    },
    {
        heading: "very great product",
        review: "Experience the epitome of style and comfort with our beautifully crafted wooden armchair that seamlessly blends timeless elegance with cozy relaxation.",
        user_img: "/images/users/person2.svg",
        user_name: "Marvin McKinney",
        place: "Austin",
    },
    {
        heading: "very great product",
        review: "Experience the epitome of style and comfort with our beautifully crafted wooden armchair that seamlessly blends timeless elegance with cozy relaxation.",
        user_img: "/images/users/person1.svg",
        user_name: "Robert Fox",
        place: "Fairfield",
    },
    {
        heading: "very great product",
        review: "Experience the epitome of style and comfort with our beautifully crafted wooden armchair that seamlessly blends timeless elegance with cozy relaxation.",
        user_img: "/images/users/person1.svg",
        user_name: "Guy Hawkins",
        place: "Orange",
    },
    {
        heading: "very great product",
        review: "Experience the epitome of style and comfort with our beautifully crafted wooden armchair that seamlessly blends timeless elegance with cozy relaxation.",
        user_img: "/images/users/person2.svg",
        user_name: "Marvin McKinney",
        place: "Austin",
    },
    {
        heading: "very great product",
        review: "Experience the epitome of style and comfort with our beautifully crafted wooden armchair that seamlessly blends timeless elegance with cozy relaxation.",
        user_img: "/images/users/person1.svg",
        user_name: "Robert Fox",
        place: "Fairfield",
    },

]

const Testimonial: React.FC<TestimonialProps> = () => {

    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Use useEffect to start the auto-scroll after the component mounts
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickPlay();
        }
    }, []);

    return (
        <div className="customer-review py-16 ms-3">
            <div>
                <h1 className="text-3xl uppercase font-semibold ">customer review</h1>
                <p className="text-sm leading-6 font-normal" style={{ color: "#947D66" }}>
                    Discover the power of customer satisfaction through their inspiring stories
                </p>
            </div>
            <div>
                <div className="my-14">
                    <Slider ref={sliderRef} {...settings}>
                        {sliderData.map((slide, index) => {
                            return (
                                <div key={index} className="box">
                                    <div className="border p-5 rounded-lg">
                                        <h3 className="font-semibold text-xl leading-7 uppercase mb-2">
                                            {slide.heading}
                                        </h3>
                                        <p className="leading-6 font-normal text-sm">{slide.review}</p>
                                    </div>
                                    <div className="flex item-center gap-2 mt-5 mb-16">
                                        <div>
                                            <Image src={slide.user_img} width={44} height={44} alt="user" />
                                        </div>
                                        <div>
                                            <h6 className="leading-6 font-semibold text-base">{slide.user_name}</h6>
                                            <p className="leading-4 font-medium text-xs capitalize">{slide.place}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
