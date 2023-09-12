'use client'
import Image from "next/image";
import React from "react";
import CartForm from "./CartForm";
import Counter from "./Counter";

const Quantity = () => {
    return (
        <div className="wrapper">
            <div className="quantity" >
                <div className="grid lg:grid-cols-3">
                    <div className="col-span-2 md:me-10" >
                        <div className="sm:flex justify-between items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <input
                                        id="offers"
                                        name="offers"
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                    <h1 className="text-sm font-medium leading-5">Products</h1>
                                </div>
                                <div className="flex items-center gap-3" style={{ minHeight: "100px" }}>
                                    <input
                                        id="offers"
                                        name="offers"
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                    <Image src="/images/products/p1_sm.svg" width={80} height={80} alt="product image" />
                                    <div>
                                        <h1 className="font-semibold uppercase">Kohler</h1>
                                        <p className="text-sm leading-4">Purist 1.2 GPM Widespread <br /> Bathroom Faucet</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-5">
                                    <h1 className="text-sm font-medium leading-5">Quantity</h1>
                                    <h1 className="text-sm font-medium leading-5">Price</h1>
                                </div>
                                <div className="flex items-center justify-between gap-12" style={{ minHeight: "100px" }}>
                                    <Counter />
                                    <h1 className="text-xl font-medium leading-5 uppercase">$ 704.64</h1>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex justify-between items-center">
                            <div>
                                <div className="flex items-center gap-3" style={{ minHeight: "100px"}}>
                                    <input
                                        id="offers"
                                        name="offers"
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                    <Image src="/images/products/perrin_and_row.svg" width={80} height={80} alt="product image" />
                                    <div>
                                        <h1 className="font-semibold uppercase">PERRIN AND ROWE</h1>
                                        <p className="text-sm leading-4">Edwardian 1.2 GPM Widespread <br />Bathroom Faucet</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between gap-12" style={{ minHeight: "100px"}}>
                                    <Counter />
                                    <h1 className="text-xl font-medium leading-5 uppercase">$ 704.64</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 ps-5" style={{borderLeft: "1px solid #d4d3d2" }}>
                        <h1>FIND OUT HOW MUCH YOU CAN SAVE BY REQUESTING FOR A QUOTE</h1>
                        <div className="flex justify-between items-center mt-4">
                            <p>PRICE BEFORE DISCOUNT</p>
                            <h3>$ 2,062.64</h3>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>PRICE BEFORE DISCOUNT</p>
                            <h3>$ 2,062.64</h3>
                        </div>
                        <CartForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quantity;
