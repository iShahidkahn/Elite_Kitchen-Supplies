'use client'
import Counter from "@/components/Counter";
import Image from "next/image";
import React, { useState } from "react";
import RequestForm from "./RequestForm";

interface Product {
    name: string;
    description: string;
    price: string;
    image: string;
}

const cartData: Product[] = [
    {
        name: "kohler",
        description: "Purist 1.2 GPM Widespread Bathroom Faucet",
        price: "$ 704.64",
        image: "/images/products/p1_sm.svg"
    },
    {
        name: "PERRIN AND ROWE",
        description: "Purist 1.2 GPM Widespread Bathroom Faucet",
        price: "$ 1,358.00",
        image: "/images/products/perrin_and_row.svg"
    },
    {
        name: "kohler",
        description: "Purist 1.2 GPM Widespread Bathroom Faucet",
        price: "$ 704.64",
        image: "/images/products/p1_sm.svg"
    },
    {
        name: "PERRIN AND ROWE",
        description: "Purist 1.2 GPM Widespread Bathroom Faucet",
        price: "$ 1,358.00",
        image: "/images/products/perrin_and_row.svg"
    },

]

const Quantity = () => {

    const [productCheckboxes, setProductCheckboxes] = useState<boolean[]>(
        cartData.map(() => false)
    );

    const handleSelectAll = () => {
        setProductCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map(() => !selectAll)
        );
    };

    const handleProductCheckboxChange = (index: number) => {
        setProductCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((checked, i) => (i === index ? !checked : checked))
        );
    };

    const selectAll = productCheckboxes.every((checkbox) => checkbox);

    return (
        <div className="wrapper">
            <div className="quantity" >
                <div className="grid lg:grid-cols-3">
                    <div className="col-span-3 lg:col-span-2">
                        <div className="hidden md:grid grid-cols-4 mt-3 mb-8">
                            <div className="col-span-2">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-3">
                                        <input
                                            id="selectAll"
                                            name="selectAll"
                                            type="checkbox"
                                            className="checkbox"
                                            checked={selectAll}
                                            onChange={handleSelectAll}
                                        />
                                        <h1 className="text-sm font-medium leading-5">Products</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <h1 className="text-sm font-medium leading-5">Quantity</h1>
                            </div>
                            <div className="col-span-1">
                                <h1 className="text-sm font-medium leading-5">Price</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-4">
                            {cartData.map((data, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div className="col-span-4 lg:col-span-2">
                                            <div className="flex items-center gap-3 md:h-24">
                                                <input
                                                    id={`productCheckbox${index}`}
                                                    name={`productCheckbox${index}`}
                                                    type="checkbox"
                                                    className="checkbox"
                                                    checked={productCheckboxes[index]}
                                                    onChange={() => handleProductCheckboxChange(index)}
                                                />
                                                <Image src={data.image} width={80} height={80} alt="product image" />
                                                <div>
                                                    <h1 className="font-semibold uppercase">{data.name}</h1>
                                                    <p className="text-sm leading-4">{data.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 lg:col-span-1">
                                            <div className="flex items-center ps-9 md:ps-0 h-20 md:h-24">
                                                <Counter />
                                            </div>
                                        </div>
                                        <div className="col-span-2 lg:col-span-1">
                                            <div className="flex items-center justify-end lg:justify-start pe-9 md:pe-0 h-20 md:h-24">
                                                <h1 className="text-xl font-medium leading-5 uppercase">{data.price}</h1>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                );
                            }
                            )}
                        </div>
                    </div>
                    <div className="border p-5 lg:p-0 rounded-lg mt-5 lg:mt-0 lg:border-0 lg:rounded-none col-span-3 lg:col-span-1 lg:ps-5" style={{ borderLeft: "1px solid #d4d3d2" }}>
                        <h1 className="font-semibold leading-5">FIND OUT HOW MUCH YOU CAN SAVE BY REQUESTING FOR A QUOTE</h1>
                        <div className="flex justify-between items-center mt-4">
                            <p className="text-xs">PRICE BEFORE DISCOUNT</p>
                            <h3 className="font-semibold  ">$ 2,062.64</h3>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-xs">PRICE AFTER DISCOUNT</p>
                            <h3 className="font-semibold blur-sm">$ 2,062.64</h3>
                        </div>
                        <RequestForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quantity;
