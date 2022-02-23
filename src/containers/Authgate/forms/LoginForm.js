import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "./validation";

const LoginForm = ({ submitForm }) => {
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    validationSchema: loginSchema,
    initialValues: {
      emailAddress: "",
      password: "",
    },
    onSubmit: submitForm,
  });

  return (
    <form onSubmit={handleSubmit}>
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
      <button
        type='submit'
        className='text-gray-900 bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg'
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
