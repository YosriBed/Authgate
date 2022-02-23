import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../slice";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(actions.logout());
  };
  if (user) {
    return (
      <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
        <Link to='/' className='mr-5 hover:text-white'>
          Home
        </Link>
        <button
          onClick={() => {
            logout();
          }}
          className='inline-flex items-center text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'
        >
          Logout
        </button>
      </nav>
    );
  }

  return null;
};

export default Navbar;
