'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const JoinUs = () => {
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
    <div className="join-us w-full flex justify-center py-10 text-center my-20">
      <div className='max-w-xl lg:max-w-lg mt-3'>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">STAY IN THE LOOP</h2>
        <p className="mt-1 text-lg leading-8 text-gray-300">
          Join our exclusive newsletter for furniture and home decor Inspiration, Insider updates, and special offers!
        </p>
        <form onSubmit={formik.handleSubmit} className="mt-6">
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
          <button type="submit" className="ms-3">
            Join
          </button>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600 mt-4">{formik.errors.email}</div>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
