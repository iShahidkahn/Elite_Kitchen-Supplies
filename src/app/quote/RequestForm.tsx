'use client'
import React from 'react';
import Image from 'next/image';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
});


const RequestForm = () => {
    const handleSubmit = (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        // Handle form submission here
        console.log(values);
        setSubmitting(false);
    };


    return (
        <div className='cart-form'>
            <div className="form">
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <form>
                            <div>
                                <div className="mt-10">
                                    <div className="my-3">
                                        <label htmlFor="first-name" className="text-sm font-medium leading-6" style={{ color: "#6A5A49" }}>
                                            Full Name*
                                        </label>
                                        <div className="">
                                            <Field
                                                type="text"
                                                name="name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className={`block w-full rounded-lg border-0 px-3 py-3 shadow-sm ring-1 ring-inset ${errors.name && touched.name ? 'ring-red-500' : 'ring-gray-300'
                                                    } placeholder:text-gray-300 placeholder:font-normal`}
                                                placeholder='Enter full name'
                                            />
                                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="email" className="text-sm font-medium leading-6" style={{ color: "#6A5A49" }}>
                                            Email Address*
                                        </label>
                                        <div className="">
                                            <Field
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className={`block w-full rounded-lg border-0 px-3 py-3 shadow-sm ring-1 ring-inset ${errors.email && touched.email ? 'ring-red-500' : 'ring-gray-300'
                                                    } placeholder:text-gray-300 placeholder:font-normal`}
                                                placeholder='Enter email address'
                                            />
                                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="phone" className="text-sm font-medium leading-6" style={{ color: "#6A5A49" }}>
                                            Phone No*
                                        </label>
                                        <div className="">
                                            <Field
                                                id="phone"
                                                name="phone"
                                                type="number"
                                                autoComplete="phone"
                                                className={`block w-full rounded-lg border-0 px-3 py-3 shadow-sm ring-1 ring-inset ${errors.phone && touched.phone ? 'ring-red-500' : 'ring-gray-300'
                                                    } placeholder:text-gray-300 placeholder:font-normal`}
                                                placeholder='Enter your phone number (only digits)'
                                            />
                                            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-start gap-x-6">
                                <Link href="/quote/quote_sent">
                                    <button type="submit" disabled={isSubmitting}>
                                        REQUEST FOR QUOTE
                                        <Image src="/icons/arrow_up_wht.svg" width={18} height={18} alt='icon' />
                                    </button>
                                </Link>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default RequestForm;





