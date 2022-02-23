import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Authgate = () => {
  const [hasAccount, setHasAccount] = useState(false);
  const user = useSelector((state) => state.user);
  if (user) {
    return <Navigate to='/' />;
  }
  return (
    <section className='body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='lg:w-2/6 mx-auto'>
          {hasAccount ? (
            <Login setHasAccount={setHasAccount} />
          ) : (
            <Register setHasAccount={setHasAccount} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Authgate;
