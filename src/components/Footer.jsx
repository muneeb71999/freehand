import React from "react";

const Footer = () => {
  return (
    <div className="footer__container">
      <footer className="footer">
        <div className="footer__left">
          <img
            src="/imgs/logo-white.svg"
            alt="Freehand"
            className="footer__logo"
          />
          <p className="footer__info">
            We're brand strategy and digital design agency, building brands that
            matter in culture.
            <br />
            <br />
            mail@freehand.io
          </p>
          <div className="footer__social">
            <a href="/">
              <img src="/imgs/facebook.svg" alt="" />
            </a>
            <a href="/">
              <img src="/imgs/instagram.svg" alt="" />
            </a>
            <a href="/">
              <img src="/imgs/twitter.svg" alt="" />
            </a>
            <a href="/">
              <img src="/imgs/dribbble.svg" alt="" />
            </a>
            <a href="/">
              <img src="/imgs/github.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="footer__right">
          <ul className="footer__list">
            <li className="footer__list__title">Services</li>
            <li>
              <a href="/" className="footer__link">
                Blog
              </a>
            </li>
            <li>
              <a href="/" className="footer__link">
                Partner with freehand
              </a>
            </li>
            <li>
              <a href="/" className="footer__link">
                Apps & Plugins
              </a>
            </li>
            <li>
              <a href="/" className="footer__link">
                FAQ
              </a>
            </li>
            <li>
              <a href="/" className="footer__link">
                UI Kit
              </a>
            </li>
          </ul>

          <ul className="footer__list">
            <li className="footer__list__title">Company</li>
            <li>
              <a href="/" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="/" className="footer__link">
                Terms
              </a>
            </li>
            <li>
              <a href="/" className="footer__link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="footer__link">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
