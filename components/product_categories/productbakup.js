"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SortProducts from "./SortProducts";


const Products = () => {
    const data = [
        {
            img: "/images/products/kohler.svg",
            p_name: "Kohler",
            p_dec:
                "Purist 1.5 GPM Single Hole Pre-Rinse Kitchen Faucet with Sweep Spray",
            price: "MSRP $664.43",
        },
        {
            img: "/images/products/kraus.svg",
            p_name: "Kraus",
            p_dec: "Bolden 1.8 GPM Single Hole Pre-Rinse Pull Down Kitchen Faucet",
            price: "MSRP $ 199.95",
        },
        {
            img: "/images/products/moen.svg",
            p_name: "Moen",
            p_dec:
                "Gibson Widespread Bathroom Sink Faucet with Pop-Up Drain Assembly",
            price: "MSRP $ 125.58",
        },
        {
            img: "/images/products/moen.svg",
            p_name: "Moen",
            p_dec:
                "Gibson Widespread Bathroom Sink Faucet with Pop-Up Drain Assembly",
            price: "MSRP $ 125.58",
        },
        {
            img: "/images/products/moen.svg",
            p_name: "Moen",
            p_dec:
                "Gibson Widespread Bathroom Sink Faucet with Pop-Up Drain Assembly",
            price: "MSRP $ 125.58",
        },
        {
            img: "/images/products/moen.svg",
            p_name: "Moen",
            p_dec:
                "Gibson Widespread Bathroom Sink Faucet with Pop-Up Drain Assembly",
            price: "MSRP $ 125.58",
        },
        {
            img: "/images/products/moen.svg",
            p_name: "Moen",
            p_dec:
                "Gibson Widespread Bathroom Sink Faucet with Pop-Up Drain Assembly",
            price: "MSRP $ 125.58",
        },
        {
            img: "/images/products/moen.svg",
            p_name: "Moen",
            p_dec:
                "Gibson Widespread Bathroom Sink Faucet with Pop-Up Drain Assembly",
            price: "MSRP $ 125.58",
        },
        {
            img: "/images/products/moen.svg",
            p_name: "Moen",
            p_dec:
                "Gibson Widespread Bathroom Sink Faucet with Pop-Up Drain Assembly",
            price: "MSRP $ 125.58",
        },
        {
            img: "/images/products/moen.svg",
            p_name: "Moen",
            p_dec:
                "Gibson Widespread Bathroom Sink Faucet with Pop-Up Drain Assembly",
            price: "MSRP $ 125.58",
        },
        {
            img: "/images/products/moen.svg",
            p_name: "Moen",
            p_dec:
                "Gibson Widespread Bathroom Sink Faucet with Pop-Up Drain Assembly",
            price: "MSRP $ 125.58",
        },
        {
            img: "/images/products/moen.svg",
            p_name: "Moen",
            p_dec:
                "Gibson Widespread Bathroom Sink Faucet with Pop-Up Drain Assembly",
            price: "MSRP $ 125.58",
        }
    ];

    const itemsPerPage = 2;

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Filter products for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = data.slice(startIndex, endIndex);


    // Split data into rows with two products in each row for small screens
    const [itemsPerRow, setItemsPerRow] = useState(3);

    useEffect(() => {
        // Update itemsPerRow based on window width
        const handleResize = () => {
            setItemsPerRow(window.innerWidth < 768 ? 2 : 3);
        };

        window.addEventListener("resize", handleResize);

        // Initial call to set itemsPerRow based on window width
        handleResize();

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Create an array of rows with products
    const productsInRows = [];
    for (let i = 0; i < data.length; i += itemsPerRow) {
        const row = data.slice(i, i + itemsPerRow);
        productsInRows.push(row);
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <SortProducts />
                </div>
                <div className="col-span-3 product-categories md:ms-5">
                    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-2 lg:max-w-7xl lg:px-8">
                        <p className="ms-4 py-4" style={{ fontWeight: "500" }}>
                            Applied filters:
                        </p>
                        {currentProducts.map((product, productIndex) => (
                            <div
                                key={productIndex}
                                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4"
                            >
                                <div className="group relative aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                                    <img
                                        src={product.img}
                                        alt={`Image of ${product.p_name}`}
                                        className="w-full h-full object-cover object-center lg:object-center lg:h-full lg:w-full"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <h3 className="text-sm bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Link href="/product_details">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                {product.p_name}
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h1 className="text-sm font-medium text-gray-900">
                                        {product.p_name}
                                    </h1>
                                    <p>{product.p_dec}</p>
                                    <p className="price mt-1">{product.price}</p>
                                    <Link href="/add_to_quote">
                                        <button className="mt-4">add to quote</button>
                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
                        <div className="flex flex-1 justify-between sm:hidden">
                            <button
                                onClick={handlePreviousPage}
                                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Previous
                            </button>
                            <button
                                onClick={handleNextPage}
                                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Next
                            </button>
                        </div>
                        <div className="pagination hidden sm:flex sm:flex-1 sm:items-center sm:justify-center my-10">
                            <div>
                                <nav className="isolate inline-flex -space-x-px rounded-md" aria-label="Pagination">
                                    <button
                                        onClick={handlePreviousPage}
                                        className={`${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                                            } ic me-20 rounded-l-md px-2 py-2 text-gray-400`}
                                        disabled={currentPage === 1}
                                    >
                                        <span className="sr-only">Previous</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                                            />
                                        </svg>
                                    </button>
                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentPage(index + 1)}
                                            className={`${currentPage === index + 1
                                                    ? "bg-gray-900 text-white"
                                                    : "bg-white text-gray-900"
                                                } px-4 py-2 text-sm font-semibold`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                    <button
                                        onClick={handleNextPage}
                                        className={`${currentPage === totalPages
                                                ? "opacity-50 cursor-not-allowed"
                                                : ""
                                            } ic rounded-r-md px-2 py-2`}
                                        disabled={currentPage === totalPages}
                                    >
                                        <span className="sr-only">Next</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                            />
                                        </svg>
                                    </button>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Products;
