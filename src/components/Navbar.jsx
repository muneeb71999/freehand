import React, { useState } from "react";

const Navbar = () => {
  const toggleNavbar = () => {
    setOpen(!isOpen);
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__left">
        <a href="/">
          <img src="/imgs/logo.svg" alt="Freehand" className="nav__logo" />
        </a>
      </div>

      <div className="nav__center">
        <div className="nav__links">
          <a href="/" className="nav__link">
            Home
          </a>
          <a href="/" className="nav__link">
            portfolio
          </a>
          <a href="/" className="nav__link">
            Pages
          </a>
          <a href="/" className="nav__link">
            Blog
          </a>
        </div>
      </div>
      <div className="nav__right">
        <div className="nav__btns">
          <button className="nav__btn btn-primary" aria-label="Sign in">
            Sign in
          </button>
          <button className="nav__btn btn-secondary" aria-label="Sign up">
            Sign up
          </button>
        </div>
      </div>
      <div className={isOpen ? "show nav__mobile" : "nav__mobile"}>
        <div className="nav__mobile__links">
          <a href="/" className="nav__mobile__link">
            Home
          </a>
          <a href="/" className="nav__mobile__link">
            portfolio
          </a>
          <a href="/" className="nav__mobile__link">
            Pages
          </a>
          <a href="/" className="nav__mobile__link">
            Blog
          </a>
        </div>
        <div className="nav__mobile__btns ">
          <button className="nav__mobile__btn btn-primary" aria-label="Sign in">
            Sign in
          </button>
          <button
            className="nav__mobile__btn btn-secondary"
            aria-label="Sign up"
          >
            Sign up
          </button>
        </div>
      </div>
      <button className="nav__toggle" onClick={toggleNavbar}>
        <svg
          className="nav__toggle__icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
