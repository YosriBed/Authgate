import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { actions } from "../../slice";
import RegisterForm from "./forms/RegisterForm";
import { Navigate } from "react-router";

const Register = ({ setHasAccount }) => {
  const dispatch = useDispatch();
  const success = false;

  const submitForm = (values) => {
    const { firstName, lastName, phoneNumber, emailAddress, password } = values;
    dispatch(
      actions.register({
        body: { firstName, lastName, phoneNumber, emailAddress, password },
      })
    );
  };
  if (success) {
    return <Navigate to='/' />;
  } else {
    return (
      <div className='flex flex-wrap w-half bg-white py-16 px-10 relative mb-4 text-gray-900'>
        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 '>
          JOIN TIPAW TODAY
        </h1>

        <RegisterForm submitForm={submitForm} />
        <div className='py-10 px-10'>
          <p
            onClick={() => {
              setHasAccount(true);
            }}
          >
            Already have an account ? Click here
          </p>
        </div>
      </div>
    );
  }
};

export default Register;
Register.propTypes = {
  setHasAccount: PropTypes.func.isRequired,
};
