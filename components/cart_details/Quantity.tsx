'use client'
import Image from "next/image";
import React from "react";
import CartForm from "./CartForm";

const Quantity = () => {
    return (
        <div className="wrapper">
            <div className="quantity" >
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="col-span-2" style={{ background: "red" }}>
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="flex mb-5">
                                    <p>checkbox</p>
                                    <h1>Quantity</h1>
                                </div>
                                <div className="flex items-center" style={{ minHeight: "100px", background: "pink" }}>
                                    <Image src="/images/products/p1_sm.svg" width={80} height={80} alt="product image" />
                                    <div>
                                        <h1>Kohler</h1>
                                        <p>Purist 1.2 GPM Widespread <br /> Bathroom Faucet</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-5">
                                    <h1>Quantity</h1>
                                    <h1>Price</h1>
                                </div>
                                <div className="flex items-center justify-between" style={{ minHeight: "100px", background: "blue" }}>
                                    <div className="counter">
                                        counter
                                    </div>
                                    <h1>$ 704.64</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="flex items-center" style={{ minHeight: "100px", background: "pink" }}>
                                    <Image src="/images/products/p1_sm.svg" width={80} height={80} alt="product image" />
                                    <div>
                                        <h1>Kohler</h1>
                                        <p>Purist 1.2 GPM Widespread <br /> Bathroom Faucet</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between" style={{ minHeight: "100px", background: "blue" }}>
                                    <div className="counter">
                                        counter
                                    </div>
                                    <h1>$ 704.64</h1>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="col-span-1 px-3" style={{ background: "green", height: "100%",borderLeft:"1px solid white" }}>
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
