import Image from "next/image";
import Link from "next/link";



export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden py-24 sm:py-32">
            <Image
                src="images/hero.svg"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                width={1200}
                height={1200}
                alt="image"
            />
            <div className="flex justify-items-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl text-center font-bold tracking-tight text-white sm:text-6xl">
                            Elite Kitchen and Bath Innovation in Lifestyle
                        </h2>
                        <p className="mt-6 text-center text-lg leading-8 text-white">
                            Elevate your bathing experience to new heights with our exquisite range of luxury bath and kitchen fittings that seamlessly blend aesthetics and functionality.
                        </p>
                    </div>
                    <Link href='/book_meeting'>
                        <div className="heroButton text-center mx-auto mt-6">
                            <button className="flex uppercase gap-2">
                                Book a Meeting
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-6 transform rotate-45">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                                </svg>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
