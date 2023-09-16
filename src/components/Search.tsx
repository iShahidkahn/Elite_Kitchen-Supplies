import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

interface SearchProps { }

const Search = (props: SearchProps) => {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)

    return (
        <div>
            <span
                onClick={() => setOpen(true)}
                className="flex items-center px-2 py-2 cursor-pointer gap-1 me-2"
            >
                <Image src="/icons/search.svg" width={16} height={0} alt='image' className='w-6 md:w-4' /> <p className='text-sm font-semibold uppercase ms-1 me-3 hidden sm:block'>Search</p>
            </span>

            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 flex items-center justify-center"
                    initialFocus={cancelButtonRef}
                    onClose={() => setOpen(false)}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="relative z-20 w-full sm:max-w-lg p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="absolute inset-0 flex items-center justify-center">
                                <div className="w-screen text-left rounded-lg overflow-hidden mx-4 sm-mx-0">
                                    <div className="px-4 py-6 sm:p-6">
                                        <div className="text-center">
                                            <div>
                                                <div className="relative mt-2 rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        name="price"
                                                        id="price"
                                                        className="block w-full rounded-md shadow-xl border-transparent py-4 pl-7 pr-20 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                                                        placeholder="Search..."
                                                    />
                                                    <div className="absolute inset-y-0 right-0 flex items-center">
                                                        <button
                                                            className="bg-white hover:bg-gray-100 text-gray-800 uppercase py-1.5 px-4 border-s me-1"
                                                            onClick={() => setOpen(false)}
                                                            ref={cancelButtonRef}
                                                        >
                                                            Enter
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default Search