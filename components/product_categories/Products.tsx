"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SortProducts from "./SortProducts";
import Pagination from "./Pagination";


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
        }
    ];

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
                    <div
                        className="mx-auto max-w-2xl px-4 sm:px-6 py-2 lg:max-w-7xl lg:px-8"
                    >
                        <p className="ms-4 py-4" style={{ fontWeight: "500" }}>Applied filters:</p>
                        {productsInRows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="mt-6 flex flex-wrap justify-between" // Add flex-wrap for responsiveness
                            >
                                {row.map((product, productIndex) => (
                                    <div
                                        key={productIndex}
                                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4" // Adjust column width as needed
                                    >
                                        <div className="group relative aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                                            <img
                                                src={product.img}
                                                alt="Front of men's Basic Tee in black."
                                                className="w-full h-full object-cover object-center lg:object-center lg:h-full lg:w-full"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center"> {/* Center content */}
                                                <h3 className="text-sm bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <Link href="/product_details">
                                                        <span
                                                            aria-hidden="true"
                                                            className="absolute inset-0"
                                                        />
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
                        ))}
                    </div>
                    <div>
                        <Pagination />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
