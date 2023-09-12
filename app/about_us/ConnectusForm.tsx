import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'


const ConnectusForm = () => {
    return (
        <div className='connect-us-form'>
            <div className='md:mx-10 lg:mx-20 border p-8 rounded-lg my-8'>
                <div>
                    <h1 className='text-2xl uppercase mb-10'>let’s connect:</h1>
                </div>
                <div className="form">
                    <form>
                        <div>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        First name*
                                    </label>
                                    <div className="">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-lg border-0 px-3 py-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 placeholder:font-normal"
                                            placeholder='Jon'
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Last name*
                                    </label>
                                    <div className="">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-lg border-0 px-3 py-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 placeholder:font-normal"
                                        placeholder='Cooper'
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address*
                                    </label>
                                    <div className="">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-lg border-0 px-3 py-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 placeholder:font-normal"
                                        placeholder='abcd@gmail.com'
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Phone No*
                                    </label>
                                    <div className="">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="number"
                                            autoComplete="phone"
                                            className="block w-full rounded-lg border-0 px-3 py-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 placeholder:font-normal"
                                        placeholder='+123 456 7690'
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    Message*
                                    </label>
                                    <div className="">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={5}
                                            placeholder='Your message....'
                                            className="block w-full rounded-lg border-0 p-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 placeholder:font-normal"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-start gap-x-6">
                            <button
                                type="submit"
                            >
                                Submit 
                                <Image src="/icons/arrow_top.svg" width={18} height={20} alt='icon'/>
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    )
}

export default ConnectusForm



/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
