import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Authgate = () => {
  const [hasAccount, setHasAccount] = useState(false);
  return (
    <div>
      {hasAccount ? (
        <Login setHasAccount={setHasAccount} />
      ) : (
        <Register setHasAccount={setHasAccount} />
      )}
    </div>
  );
};

export default Authgate;
