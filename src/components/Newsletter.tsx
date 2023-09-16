'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Image from 'next/image';

const Newsletter = () => {
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('Form submitted with values:', values);
        },
    });

    return (
        <div className="join-us flex justify-center items-center py-10 text-center my-20 mx-4 sm:mx-6 md:mx-10 px-1">
            <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">STAY IN THE LOOP</h2>
                <p className="mt-1 text-lg leading-8 text-gray-300">
                    Join our exclusive newsletter for furniture and home decor Inspiration, Insider updates, and special offers!
                </p>
                <div className="flex justify-center">
                    <form onSubmit={formik.handleSubmit} className="mt-6" style={{ maxWidth: "350px" }}>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className={`${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                            placeholder="Enter your email address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <button type="submit" className=" md:ms-3 ms-2 mt-4 sm:mt-0">
                            Join
                        </button>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="ms-1 mt-1 text-start text-sm" style={{ color: "red" }}>{formik.errors.email}</div>
                        ) : null}
                    </form>
                </div>
                <div className="flex justify-center">
                    <div className="social flex gap-4 mt-4">
                        <Link href="#" className='' style={{ background: "#947D66", borderRadius: "12px" }}>
                            <Image src="/icons/fb_white.svg" className="ic" width={20} height={0} alt='fb' />
                        </Link>
                        <Link href="#" className='' style={{ background: "#947D66", borderRadius: "12px" }}>
                            <Image src="/icons/instagram_white.svg" className="ic" width={20} height={0} alt='fb' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
