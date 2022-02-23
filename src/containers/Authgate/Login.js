import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { actions } from "../../slice";
import LoginForm from "./forms/LoginForm";
import { Navigate } from "react-router";

const Login = ({ setHasAccount }) => {
  const dispatch = useDispatch();
  const success = false;

  const submitForm = (values) => {
    const { emailAddress, password } = values;
    dispatch(
      actions.login({
        body: { emailAddress, password },
      })
    );
  };
  if (success) {
    return <Navigate to='/' />;
  } else {
    return (
      <div className='flex flex-wrap w-half bg-white py-16 px-10 relative mb-4 text-gray-900'>
        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 '>
          Login to your account
        </h1>

        <LoginForm submitForm={submitForm} />
        <div className='py-10 px-10'>
          <p
            onClick={() => {
              setHasAccount(false);
            }}
          >
            Don't have an account yet ? Click here
          </p>
        </div>
      </div>
    );
  }
};

export default Login;

Login.propTypes = {
  setHasAccount: PropTypes.func.isRequired,
};
