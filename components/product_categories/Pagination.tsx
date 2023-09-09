import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Pagination = () => {
    return (
        <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="pagination hidden sm:flex sm:flex-1 sm:items-center sm:justify-center my-10">
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md" aria-label="Pagination">
                        <a
                            href="#"
                            className="ic me-20  rounded-l-md px-2 py-2 text-gray-400"
                        >
                            <span className="sr-only">Previous</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            aria-current="page"
                            className="current px-4 py-2 text-sm"
                        >
                            1
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 text-sm"
                        >
                            2
                        </a>

                        <span className="px-4 py-2 text-sm font-semibold text-gray-700 focus:outline-offset-0">
                            . . .
                        </span>
                        <a
                            href="#"
                            className="px-4 py-2 text-sm"
                        >
                            7
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 text-sm"
                        >
                            8
                        </a>

                        <a
                            href="#"
                            className="ic rounded-r-md px-2 py-2"
                            style={{ marginLeft: "60px" }}
                        >
                            <span className="sr-only">Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Pagination;