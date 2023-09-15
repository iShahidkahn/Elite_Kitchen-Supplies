'use client'
import React from 'react';
import Image from 'next/image';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required'),
});


const Contact = () => {
    const handleSubmit = (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        // Handle form submission here
        console.log(values);
        setSubmitting(false);
    };


    return (
        <div className='connect-us-form'>
            <div className='mx-5 sm:mx-10 lg:mx-20 border p-8 rounded-lg my-8'>
                <div>
                    <h1 className='text-2xl uppercase mb-10'>let’s connect:</h1>
                </div>
                <div className="form">
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            phone: '',
                            message: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <form>
                                <div>
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                First name*
                                            </label>
                                            <div className="">
                                                <Field
                                                    type="text"
                                                    name="firstName"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className={`block w-full rounded-lg border-0 px-3 py-3 shadow-sm ring-1 ring-inset ${errors.firstName && touched.firstName ? 'ring-red-500' : 'ring-gray-300'
                                                        } placeholder:text-gray-300 placeholder:font-normal`}
                                                    placeholder='Jon'
                                                />
                                                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Last name*
                                            </label>
                                            <div className="">
                                                <Field
                                                    type="text"
                                                    name="lastName"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className={`block w-full rounded-lg border-0 px-3 py-3 shadow-sm ring-1 ring-inset ${errors.lastName && touched.lastName ? 'ring-red-500' : 'ring-gray-300'
                                                        } placeholder:text-gray-300 placeholder:font-normal`}
                                                    placeholder='Cooper'
                                                />
                                                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Email address*
                                            </label>
                                            <div className="">
                                                <Field
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className={`block w-full rounded-lg border-0 px-3 py-3 shadow-sm ring-1 ring-inset ${errors.email && touched.email ? 'ring-red-500' : 'ring-gray-300'
                                                        } placeholder:text-gray-300 placeholder:font-normal`}
                                                    placeholder='abcd@gmail.com'
                                                />
                                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
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
                                                    placeholder='+123 456 7690'
                                                />
                                                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                                            </div>
                                        </div>
                                        <div className="col-span-full">
                                            <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                                                Message*
                                            </label>
                                            <div className="">
                                                <Field
                                                    id="message"
                                                    name="message"
                                                    as="textarea"
                                                    rows={5}
                                                    placeholder='Your message....'
                                                    className={`block w-full rounded-lg border-0 p-3 shadow-sm ring-1 ring-inset ${errors.message && touched.message ? 'ring-red-500' : 'ring-gray-300'
                                                        } placeholder:text-gray-300 placeholder:font-normal`}
                                                />
                                                <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-start gap-x-6">
                                <button type="submit" disabled={isSubmitting}>
                    Submit
                    <Image src="/icons/arrow_top.svg" width={18} height={20} alt='icon' />
                  </button>
                                </div>
                            </form>
                        )}
                    </Formik>

                </div>
            </div>
        </div>
    );
};

export default Contact;





