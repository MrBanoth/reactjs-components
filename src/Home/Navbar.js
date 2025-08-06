import React from 'react';

function Navbar() {
  const userId = localStorage.getItem('userId');
  var IsLoggedIn = userId;

  function logoutFunction(e) {
    e.preventDefault();
    localStorage.removeItem('userId'); // ✅ only remove userId
    window.location.href = "/"; // ✅ optional: redirect to home/login page
  }

  return (
    
    <ul className="list-unstyled d-flex gap-4 mt-5  text-white ">

      <li className="">Home</li>
      <li className="">About</li>
      <li className="">Courses</li>
      <li className="">Contact</li>

      {
        IsLoggedIn ? (
          <li onClick={logoutFunction} className="" style={{ cursor: 'pointer' }}>
            Logout
          </li>
        ) : (
          <li className="text-dark">
            <a href="/login" className="text-white text-decoration-none">Login</a>
          </li>
        )
      }
    </ul>
  );
}

export default Navbar;
