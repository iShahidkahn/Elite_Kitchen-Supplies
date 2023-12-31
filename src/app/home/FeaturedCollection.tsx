'use client'
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

interface FeaturedCollectionProps { }

const sliderData = [
  {
    image: "/images/slider/bathtub.svg",
    link_text: "Bathtubs",
    link: "/products",
  },
  {
    image: "/images/slider/faucet.svg",
    link_text: "Faucets",
    link: "",
  },

  {
    image: "/images/slider/bathtub.svg",
    link_text: "Bathtubs",
    link: "",
  },
  {
    image: "/images/slider/faucet.svg",
    link_text: "Faucets",
    link: "",
  },

  {
    image: "/images/slider/bathtub.svg",
    link_text: "Bathtubs",
    link: "",
  },
  {
    image: "/images/slider/faucet.svg",
    link_text: "Faucets",
    link: "",
  },
  {
    image: "/images/slider/bathtub.svg",
    link_text: "Bathtubs",
    link: "",
  },
  {
    image: "/images/slider/faucet.svg",
    link_text: "Faucets",
    link: "",
  },
  {
    image: "/images/slider/bathtub.svg",
    link_text: "Bathtubs",
    link: "",
  },
  {
    image: "/images/slider/faucet.svg",
    link_text: "Faucets",
    link: "",
  },


]

const CustomNextArrow = (props: any) => {
  const { className, style, onClick, sliderRef } = props;
  return (
    <button
      className={`custom-next-arrow ${className}`}
      style={{ ...style }}
      onClick={() => {
        onClick();
        sliderRef.current?.slickNext();
      }}
    >
      Next
    </button>
  );
};

const CustomPrevArrow = (props: any) => {
  const { className, style, onClick, sliderRef } = props;
  return (
    <button
      className={`custom-prev-arrow ${className}`}
      style={{ ...style }}
      onClick={() => {
        onClick();
        sliderRef.current?.slickPrev();
      }}
    >
      Previous
    </button>
  );
};

const FeaturedCollection: React.FC<FeaturedCollectionProps> = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <CustomNextArrow sliderRef={sliderRef} />,
    prevArrow: <CustomPrevArrow sliderRef={sliderRef} />,
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
        breakpoint: 822,
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

  return (
    <div className="featured-collection py-10 ms:py-16 my-16">
      <div className="md:flex justify-between items-center mx-4 sm:mx-12">
        <div>
          <h1 className="sm:text-2xl md:text-3xl uppercase font-semibold text-white">
            featured category
          </h1>
          <p className="text-sm leading-8	font-normal text-white font-normal">Get more, pay less: your ticket to furniture bliss!</p>
        </div>
        <div>
          <button className="secondary-button mb-6 mt-3" style={{ width: "fit-content" }}>
            book a meeting
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-6 transform rotate-45">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <div className="md:my-14">
          <Slider ref={sliderRef} {...settings}>
            {sliderData.map((slide, index) => {
              return (
                <div key={index} className="carousel-img relative">
                  <Image src={slide.image} width={360} height={400} alt="image" className="rounded-lg sm:w-full" />
                  <Link href={slide.link}>
                    <button className="absolute bottom-6 left-6 bg-white px-4 py-1 font-semibold rounded-md">{slide.link_text}</button>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="custom-buttons ms-3 md:ms-11 mt-3 sm:mt-0">
        <button onClick={() => sliderRef.current?.slickPrev()} className="p-2 me-5">
          <Image src="/icons/arrow_left.svg" width={32} height={32} alt="icon" />
        </button>
        <button onClick={() => sliderRef.current?.slickNext()} className="p-2">
          <Image src="/icons/arrow_right.svg" width={32} height={32} alt="icon" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedCollection;
