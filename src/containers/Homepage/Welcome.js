import React from "react";
import { useSelector } from "react-redux";
const Welcome = () => {
  const user = useSelector((state) => state.user);
  return (
    <section class='text-gray-600 body-font relative'>
      <div class='container px-5 py-24 mx-auto'>
        <div class='flex flex-col text-center w-full mb-12 bg-blue-500'>
          <h1 class='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Welcome {user.firstName} {user.lastName}
          </h1>
          <p class='lg:w-2/3 mx-auto leading-relaxed text-white'>
            My name is Yosri Bedoui and this is my submission for the technical
            test
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
