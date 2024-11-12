// src/components/Profile.jsx
import React from 'react';

const Profile = () => {
  return (
    <div className="container my-5">
      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <div className="card-body text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRCEA-EgV4ocW1dEvqPyYwau7oDdeZSXzKkw&s"
            alt="Profile"
            className="rounded-circle mb-3"
          />
          <h3 className="card-title">John Doe</h3>
          <p className="card-text text-muted">Full Stack Developer</p>
          <p>
            Passionate about building scalable web applications and working
            across the full stack. Experienced in JavaScript, React, Node.js,
            and more.
          </p>
          <a href="https://www.linkedin.com" className="btn btn-primary me-2">
            LinkedIn
          </a>
          <a href="https://www.github.com" className="btn btn-dark">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
