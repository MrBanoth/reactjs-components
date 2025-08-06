import React, { useState } from 'react';
import Navbar from './Navbar';
import EmailChecker from '../Usages/Email';

function Signup() {
  // Form values
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // Validation errors
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Handlers
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleMobile(e) {
    setMobile(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function handSubmitButton(e) {
    e.preventDefault();
    let validation = 0;

    // Email validation
    if (!EmailChecker(email)) {
      setEmailError('Enter a valid email');
      validation++;
    } else {
      setEmailError('');
    }

    // Mobile validation (10 digits only)
    if (!/^\d{10}$/.test(mobile)) {
      setMobileError('Enter a valid 10-digit mobile number');
      validation++;
    } else {
      setMobileError('');
    }

    // Name validation
    if (name.trim() === '') {
      setNameError('Name is required');
      validation++;
    } else {
      setNameError('');
    }

    // Password validation
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      validation++;
    } else {
      setPasswordError('');
    }

    // If all valid, send API request
    if (validation === 0) {
      try {
        const ApiInput = {
          email,
          mobile,
          name,
          password
        };

        const Response = await fetch('https://api.softwareschool.co/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(ApiInput)
        });

        const ResponseJson = await Response.json();
        console.log(ResponseJson);

        if (ResponseJson.status === 'success') {
          alert('Signup successful!');
          // Optional: Redirect or clear form here
        } else {
          alert(`Signup Done: ${ResponseJson.message}`);
        }
      } catch (e) {
        console.log(e.message);
        alert('Something went wrong. Please try again later.');
      }
    }
  }

  return (
    <div className="container">
      {/* Navbar */}
      <div className="row">
        <div className="col-12 pt-2">
          <Navbar />
        </div>
      </div>

      {/* Signup Form */}
      <div className="row mt-5 text-center justify-content-center text-white">
        <form className="col-4 d-grid p-5 rounded-4" onSubmit={handSubmitButton}>
          {/* Email */}
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={handleEmail}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
            />
            <div className="text-danger">{emailError}</div>
          </div>

          {/* Mobile */}
          <div className="form-group mt-3">
            <label htmlFor="exampleInputMobile">Mobile Number</label>
            <input
              onChange={handleMobile}
              type="tel"
              className="form-control"
              id="exampleInputMobile"
              placeholder="Enter 10-digit mobile number"
            />
            <div className="text-danger">{mobileError}</div>
          </div>

          {/* Name */}
          <div className="form-group mt-3">
            <label htmlFor="exampleInputName">Full Name</label>
            <input
              onChange={handleName}
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Enter your name"
            />
            <div className="text-danger">{nameError}</div>
          </div>

          {/* Password */}
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={handlePassword}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <div className="text-danger">{passwordError}</div>
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button type="submit" className="btn mt-3 btn-info">Submit</button>
            <p className="mt-4">
              Already have an account?
              <a href="/" className="text-white text-decoration-none"> Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
