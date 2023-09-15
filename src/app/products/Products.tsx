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

    ];

    const itemsPerRow = 3; // Display 3 products per row
    const itemsPerPage = 9; // Display 6 products per page

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

    // Split data into rows with three products in each row
    const productsInRows = [];
    for (let i = 0; i < currentProducts.length; i += itemsPerRow) {
        const row = currentProducts.slice(i, i + itemsPerRow);
        productsInRows.push(row);
    }



    const renderPaginationButtons = () => {
        const renderPageButton = (page: any) => (
            <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`${currentPage === page
                    ? "current ic"
                    : ""
                    } px-4 py-2 text-sm font-normal`}
                style={{ border: "none", color: "#947D66" }}
            >
                {page}
            </button>
        );

        const paginationButtons = [];

        // Show the first two pages
        for (let page = 1; page <= Math.min(2, totalPages); page++) {
            paginationButtons.push(renderPageButton(page));
        }

        // Show dots for intermediate pages if necessary
        if (currentPage > 0 && totalPages > 4) {
            paginationButtons.push(
                <span key="dots" className="px-4 py-2 text-sm font-semibold">
                    ...
                </span>
            );
        }

        // Show the last two pages
        for (let page = Math.max(3, totalPages - 1); page <= totalPages; page++) {
            paginationButtons.push(renderPageButton(page));
        }

        return paginationButtons;
    };


    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <div className="col-span-3 lg:col-span-1">
                    <SortProducts />
                </div>
                <div className="col-span-3 product-categories lg:ms-5">
                    <div className="mx-auto px-4 sm:px-6 py-2">
                        <p className="ms-4 py-1 mb-10" style={{ fontWeight: "500" }}>
                            Applied filters:
                        </p>
                        {productsInRows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="mt-6 flex flex-wrap justify-between"
                            >
                                {row.map((product, productIndex) => (
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
                                                <h3 className="text-sm bg-gray-700 opacity-0">
                                                    <Link href="/products/product_details">
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
                                            <Link href="/quote">
                                                <button className="mt-4">add to quote</button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
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
                                <nav className="isolate inline-flex -space-x-px rounded-md gap-4" aria-label="Pagination">
                                    {/* Previous button */}
                                    <button
                                        onClick={handlePreviousPage}
                                        className={`${currentPage === 1 ? "ic opacity-50 cursor-not-allowed rounded-lg" : ""
                                            } ic rounded-lg `}
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
                                    {renderPaginationButtons()}

                                    {/* Next button */}
                                    <button
                                        onClick={handleNextPage}
                                        className={`${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
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
