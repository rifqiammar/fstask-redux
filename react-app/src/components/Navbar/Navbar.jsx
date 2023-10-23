import React from "react";
import { GrLogin, GrLogout } from "react-icons/gr";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            My Blog
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/posting">
                Posting
              </a>
              <a className="nav-link" href="/contact">
                Contact
              </a>
              <a className="nav-link" href="/about">
                About
              </a>
            </div>
          </div>
          <a className="navbar-brand" href="/login">
            <GrLogin /> Login
          </a>
          <a className="navbar-brand" href="/logout">
            <GrLogout /> Logout
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
