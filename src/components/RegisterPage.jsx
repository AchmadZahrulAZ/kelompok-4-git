import React from "react";

const RegisterPage = () => {
  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title"><i className="bi bi-person-plus"></i> Register</h5>
          </div>
          <div className="modal-body">
            <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                <i className="bi bi-envelope-at"></i> Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                <i className="bi bi-person"></i> Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                <i className="bi bi-key"></i> Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-success w-100 mt-2 fw-bold"
              >
                Register <i className="bi bi-box-arrow-in-down"></i>
              </button>
              <button className="btn btn-link w-100 mt-3 text-body-secondary text-decoration-none">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
