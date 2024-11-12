// src/components/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">About Us</h2>
      <div className="row">
        <div className="col-md-6">
          <h5>Our Mission</h5>
          <p>
            We aim to provide high-quality services to our clients and help them
            achieve their goals through innovative technology solutions.
          </p>
        </div>
        <div className="col-md-6">
          <h5>Our Vision</h5>
          <p>
            To be a global leader in tech solutions, empowering businesses
            worldwide with efficient and effective digital solutions.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 text-center">
          <i className="bi bi-people-fill display-4"></i>
          <h6 className="mt-2">Teamwork</h6>
          <p>We believe in collaboration and team spirit to achieve success.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-award-fill display-4"></i>
          <h6 className="mt-2">Excellence</h6>
          <p>We strive for excellence in everything we do.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-lightbulb-fill display-4"></i>
          <h6 className="mt-2">Innovation</h6>
          <p>We innovate to stay ahead in a rapidly evolving industry.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
