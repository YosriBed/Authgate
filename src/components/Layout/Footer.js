import React from "react";

const Footer = () => {
  return (
    <footer className='text-white bg-blue-500 body-font'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <div className='flex title-font font-medium items-center md:justify-start justify-center text-white'>
          <span className='ml-3 text-xl'>TIPAW</span>
        </div>
        <p className='text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4'>
          © 2022 Tipaw Exercice —
          <a
            href='https://github.com/yosarouto'
            className='text-white ml-1'
            target='_blank'
            rel='noreferrer'
          >
            @Yosri Bedoui
          </a>
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <div className='ml-3 text-white'>
            <a
              href='https://www.linkedin.com/in/yosri-bedoui'
              className='text-white ml-1'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                fill='currentColor'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='0'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='none'
                  d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                ></path>
                <circle cx='4' cy='4' r='2' stroke='none'></circle>
              </svg>
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
