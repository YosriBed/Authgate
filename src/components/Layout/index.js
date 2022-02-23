import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div
    className=' antialiasedleading-normal tracking-wider bg-cover flex flex-col md:space-y-8'
    style={{
      backgroundImage: "url('https://source.unsplash.com/random')",
      minHeight: "100vh",
    }}
  >
    <Header />

    <main className='bg-cover flex-grow'>{children}</main>

    <Footer />
  </div>
);
Layout.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default Layout;
