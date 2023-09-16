import React from 'react';
import Image from 'next/image';

const TitleBar = () => {
    return (
        <div className="relative">
            <Image
                src="/images/titles/bathroom.svg"
                className="h-44 md:h-full w-full object-cover object-center md:object-center"
                width={100}
                height={300}
                alt="image"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div> 
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl sm:text-6xl uppercase font-semibold	">
                Bathroom
            </div>
        </div>
    );
};

export default TitleBar;
