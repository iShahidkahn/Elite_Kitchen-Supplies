import Link from 'next/link'
import React from 'react'

const Category = () => {
    return (
        <>
            <div className="flex flex-wrap gap-3">
                <Link href="/product_categories">
                    <button type="button" className='btn-category flex-grow w-auto font-semibold'>
                        Bathroom Faucet
                    </button>
                </Link>
                <button type="button" className='btn-category flex-grow w-auto font-semibold'>
                    Bathroom Faucet
                </button>
                <button type="button" className='btn-category flex-grow w-64 font-semibold'>
                    Kitchen Sinks
                </button>
                <button type="button" className='btn-category flex-grow w-auto font-semibold'>
                    Kitchen Sinks
                </button>
                <button type="button" className='btn-category flex-grow w-64 font-semibold'>
                    Bathtubs
                </button>
                <button type="button" className='btn-category flex-grow w-80 font-semibold'>
                    Shower Sets
                </button>
                <button type="button" className='btn-category flex-grow w-auto font-semibold'>
                    Toilets
                </button>
                <button type="button" className='btn-category flex-grow w-auto font-semibold'>
                    Vanities
                </button>
                <button type="button" className='btn-category flex-grow w-auto font-semibold'>
                    Designer Panels
                </button>
                <button type="button" className='btn-category flex-grow w-46 font-semibold'>
                    Accessories
                </button>
            </div>
        </>
    )
}

export default Category