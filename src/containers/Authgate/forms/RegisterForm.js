import React from "react";
import { useFormik } from "formik";
import { registerSchema } from "./validation";

const RegisterForm = ({ submitForm }) => {
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    validationSchema: registerSchema,
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
    onSubmit: submitForm,
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className='relative mb-4'>
        <label htmlFor='firstName' className='leading-7 text-sm text-gray-900'>
          First name
        </label>
        {errors.firstName && touched.firstName && (
          <p className='text-sm text-red-400'> {errors.firstName}</p>
        )}
        <input
          onChange={handleChange}
          value={values.firstName}
          type='text'
          name='firstName'
          className='w-full bg-white rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
      </div>
      <div className='relative mb-4'>
        <label htmlFor='firstName' className='leading-7 text-sm text-gray-900'>
          Last name
        </label>
        {errors.lastName && touched.lastName && (
          <p className='text-sm text-red-400'> {errors.lastName}</p>
        )}
        <input
          onChange={handleChange}
          value={values.lastName}
          type='text'
          name='lastName'
          className='w-full bg-white rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
      </div>
      <div className='relative mb-4'>
        <label htmlFor='firstName' className='leading-7 text-sm text-gray-900'>
          Phone Number
        </label>
        {errors.phoneNumber && touched.phoneNumber && (
          <p className='text-sm text-red-400'> {errors.phoneNumber}</p>
        )}
        <input
          onChange={handleChange}
          value={values.phoneNumber}
          type='text'
          name='phoneNumber'
          className='w-full bg-white rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
      </div>
      <div className='relative mb-4'>
        <label
          htmlFor='emailAddress'
          className='leading-7 text-sm text-gray-900'
        >
          Email Address
        </label>
        {errors.emailAddress && touched.emailAddress && (
          <p className='text-sm text-red-400'> {errors.emailAddress}</p>
        )}
        <input
          onChange={handleChange}
          value={values.emailAddress}
          type='emailAddress'
          name='emailAddress'
          className='w-full bg-white rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
      </div>
      <div className='relative mb-4'>
        <label htmlFor='message' className='leading-7 text-sm text-gray-900'>
          Password
        </label>
        {errors.password && touched.password && (
          <p className='text-sm text-red-400'> {errors.password}</p>
        )}
        <input
          onChange={handleChange}
          value={values.password}
          type='password'
          name='password'
          className='w-full bg-white rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
      </div>
      <div className='relative mb-4'>
        <label htmlFor='name' className='leading-7 text-sm text-gray-900'>
          Confirm your password
        </label>
        {errors.confirmPassword && touched.confirmPassword && (
          <p className='text-sm text-red-400'>{errors.confirmPassword}</p>
        )}
        <input
          className='w-full bg-white rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          onChange={handleChange}
          value={values.confirmPassword}
          type='password'
          id='confirmPassword'
          name='confirmPassword'
        />
      </div>
      <div className='relative mb-4'>
        <input
          type='checkbox'
          id='termsAccepted'
          name='termsAccepted'
          value={values.termsAccepted}
          onChange={handleChange}
        />
        <label className='text-gray-900 px-5'>
          I have read and accepted the terms and conditions
        </label>
        {errors.termsAccepted && touched.termsAccepted && (
          <p className='text-sm text-red-400'>{errors.termsAccepted}</p>
        )}
      </div>
      <button
        type='submit'
        className='text-gray-900 bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg'
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
