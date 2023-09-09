import React from 'react'
import Image from "next/image";

const TitleBar = () => {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
    <Image
        src="/images/title_bar_bathroom.svg"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        width={100}
        height={100}
        alt="image"
    />
    {/* <div className="flex justify-items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl text-center font-bold tracking-tight text-white sm:text-6xl">
                BATHROOM                
                </h2>
            </div>
        </div>
    </div> */}
</div>
  )
}

export default TitleBar