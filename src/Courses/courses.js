import React from 'react';
import Navbar from '../Home/Navbar';

function Courses() {
  // Sample course data
  const courses = [
    {
      title: 'React Basics',
      description: 'Learn the fundamentals of React, components, props, and hooks.'
    },
    {
      title: 'JavaScript Essentials',
      description: 'Master core JavaScript concepts including ES6, DOM, and events.'
    },
    {
      title: 'Node.js & Express',
      description: 'Build backend APIs using Node.js and Express framework.'
    }
  ];

  return (
    <div className="container">
      {/* Navbar */}
      <div className="row">
        <div className="col-12 pt-2">
          <Navbar />
        </div>
      </div>

      {/* Heading */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 text-center">
          <h2>Courses</h2>
        </div>
      </div>

      {/* Course Cards */}
      <div className="row justify-content-center mt-4">
        {courses.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <button className="btn btn-primary mt-auto">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
