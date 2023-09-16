import Link from 'next/link';
import React from 'react';

const Category = () => {
    return (
    
            <div className="flex flex-wrap gap-3 category mx-4 py-8 sm:mx-6 md:mx-10">
                <Link href="/products" className="md:flex-grow md:w-80 font-semibold py-3 px-2 text-center rounded-md border">
                    Bathroom Faucet
                </Link>
                <Link href="/products" className="md:flex-grow md:w-auto font-semibold py-3 px-2 md:px-8 text-center rounded-md border">
                    Kitchen Faucet
                </Link>
                <Link href="/products" className="md:flex-grow md:w-auto font-semibold py-3 px-2 md:px-8 text-center rounded-md border">
                    Kitchen Sinks
                </Link>
                <Link href="/products" className="md:flex-grow md:w-auto font-semibold py-3 px-2 md:px-8 text-center rounded-md border">
                    Bathroom Sinks
                </Link>
                <Link href="/products" className="md:flex-grow md:w-72 font-semibold py-3 px-2 md:px-8 text-center rounded-md border">
                    Bathtubs
                </Link>
                <Link href="/products" className="md:flex-grow md:w-80 max-w-96 font-semibold py-3 px-2 md:px-8 text-center rounded-md border">
                    Shower Sets
                </Link>
                <Link href="/products" className="md:flex-grow md:w-auto font-semibold py-3 px-2 md:px-8 text-center rounded-md border">
                    Toilets
                </Link>
                <Link href="/products" className="md:flex-grow md:w-auto font-semibold py-3 px-2 md:px-8 text-center rounded-md border">
                    Vanities
                </Link>
                <Link href="/products" className="md:flex-grow md:w-auto font-semibold py-3 px-2 md:px-8 text-center rounded-md border">
                    Designer Panels
                </Link>
                <Link href="/products" className="md:flex-grow md:w-64 font-semibold py-3 px-2 md:px-8 text-center rounded-md border">
                    Accessories
                </Link>
            </div>
       
    );
};

export default Category;
