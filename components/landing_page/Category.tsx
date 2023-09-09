import React from 'react'

const Category = () => {
    return (
        <>
            <div className="flex flex-wrap">
                <button type="button" className='btn-category flex-grow w-auto mx-2 ms-0'>
                    Bathroom Faucet
                </button>
                <button type="button" className='btn-category flex-grow w-auto mx-2'>
                    Bathroom Faucet
                </button>
                <button type="button" className='btn-category flex-grow w-64 mx-2'>
                    Kitchen Sinks
                </button>
                <button type="button" className='btn-category flex-grow w-auto mx-2'>
                    Kitchen Sinks
                </button>
                <button type="button" className='btn-category flex-grow w-64 mx-2'>
                    Bathtubs
                </button>
                <button type="button" className='btn-category flex-grow w-80 mx-2 ms-0 md:hidden'>
                    Shower Sets
                </button>
                <button type="button" className='btn-category flex-grow w-auto mx-2 md:hidden'>
                    Toilets
                </button>
                <button type="button" className='btn-category flex-grow w-auto mx-2 md:hidden'>
                    Vanities
                </button>
                <button type="button" className='btn-category flex-grow w-auto mx-2 md:hidden'>
                    Designer Panels
                </button>
                <button type="button" className='btn-category flex-grow w-46 mx-2 md:hidden'>
                    Accessories
                </button>
            </div>
            <div className="hidden md:flex md:flex-wrap md:mt-4">
                <button type="button" className='btn-category flex-grow w-80 mx-2 ms-0'>
                    Shower Sets
                </button>
                <button type="button" className='btn-category flex-grow w-auto mx-2'>
                    Toilets
                </button>
                <button type="button" className='btn-category flex-grow w-auto mx-2'>
                    Vanities
                </button>
                <button type="button" className='btn-category flex-grow w-auto mx-2'>
                    Designer Panels
                </button>
                <button type="button" className='btn-category flex-grow w-80 mx-2'>
                    Accessories
                </button>
            </div>
        </>
    )
}

export default Category