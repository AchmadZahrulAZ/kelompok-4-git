import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center gap-5 py-5 my-5 px-3">
        <h1 className="fs-1 fw-bold">Contact Us</h1>
        <p>"Feel free to reach out to us"</p>
      </div>
      <div className="card d-md-none gap-5 py-5 px-3">
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-primary text-center">
            <a className="text-white text-decoration-none" href="">
              <i className="bi bi-twitter-x"></i> Twitter
            </a>
          </li>
          <li className="list-group-item bg-info text-center">
            <a className="text-white text-decoration-none" href="">
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          </li>
          <li className="list-group-item bg-danger text-center">
            <a className="text-white text-decoration-none" href="">
              <i className="bi bi-instagram"></i> Instagram
            </a>
          </li>
          <li className="list-group-item bg-info text-center">
            <a className="text-white text-decoration-none" href="">
              <i className="bi bi-facebook"></i> Facebook
            </a>
          </li>
        </ul>
      </div>
      <div className="position-relative d-flex justify-content-center align-items-center d-none d-md-flex gap-5 py-5 my-5">
        <a className="btn btn-outline-primary py-3 px-4 border-3 z-1">
          <i className="bi bi-twitter-x fs-2"></i>
        </a>
        <a className="btn btn-outline-info py-3 px-4 border-3 ms-4 me-2 z-1">
          <i className="bi bi-linkedin fs-2"></i>
        </a>
        <a className="btn btn-outline-danger py-3 px-4 border-3 me-4 ms-2 z-1">
          <i className="bi bi-instagram fs-2"></i>
        </a>
        <a className="btn btn-outline-info py-3 px-4 border-3 z-1">
          <i className="bi bi-facebook fs-2"></i>
        </a>
        <div className="position-absolute card bg-black rounded-0 border-0 w-100 text-black">
          -
        </div>
        <div className="position-absolute card bg-white rounded-0 border-0 w-75 text-white">
          -
        </div>
      </div>
      <form className="d-flex justify-content-center align-items-center flex-column gap-3 py-5 my-5">
        <div><i class="bi bi-envelope fs-1"></i></div>
        <div className="card p-4 border border-3">
          <div className="d-flex flex-column justify-content-start align-items-start gap-2">
            <label className="py-1" htmlFor="email">
              Email:
            </label>
            <input
              className="border-0 border-bottom form-control"
              type="text"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="d-flex flex-column justify-content-start align-items-start gap-2">
            <label className="py-1" htmlFor="name">
              Name:
            </label>
            <input
              className="border-0 border-bottom form-control"
              type="text"
              id="name"
              name="name"
              minLength={3}
              required
            />
          </div>
          <div className="d-flex flex-column justify-content-start align-items-start gap-2">
            <label className="py-1" htmlFor="message">
              Message:
            </label>
            <textarea
              className="border-0 border-bottom form-control"
              style={{ resize: "none" }}
              type="text"
              id="message"
              name="message"
              minLength={5}
              required
            />
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
        <i class="bi bi-send-fill"></i> Send
        </button>
      </form>
    </>
  );
};

export default ContactUs;
