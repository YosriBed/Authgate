import React from "react";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className='text-white bg-blue-500 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <span className='ml-3 text-xl'>TIPAW</span>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
