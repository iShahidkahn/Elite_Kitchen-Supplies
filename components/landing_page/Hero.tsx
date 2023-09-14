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
                            <button className="flex uppercase">
                                Book a Meeting
                                <Image src='/icons/arrow_top.svg' className="my-auto ms-2" width={16} height={0} alt="icon" />
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
