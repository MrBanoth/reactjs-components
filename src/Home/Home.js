import React from 'react';
import Form from './Form.js';
import Navbar from './Navbar.js'

function Home() {
  return (
    <>
      

      <div className = 'container'>
        <div className = 'row justify-content-center'>
          <div className = 'col-3 pt-2'>
            <Navbar/>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center mt-5">
          {/* Left side - Heading */}
          <div className="col-md-6 text-center mt-5">
            <h1 className="text-info mt-5">
              Learn Job Oriented Programming with ReactJS!
            </h1>
            <p className="text-white mt-3">
              Build real-world skills that help you land real jobs.
            </p>
          </div>

          {/* Right side - Login/Signup Form */}
          <div className="col-md-6 mt-4">
           <Form/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
