import React from 'react';

const HomePage = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center my-5'>
    <h1>Welcome User!</h1>
    <p>Let's make progress together.</p>
    <div className='d-flex gap-1 mt-4'>
      <a href="" className='btn btn-outline-primary bg-white text-primary'>Documentation</a>
      <a href="" className='btn btn-primary'>Started</a>
    </div>
    </div>
  );
};  

export default HomePage;