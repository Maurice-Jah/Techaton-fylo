import React from "react";
// import logo from "../../images/logo.svg";
import logo from "../../images/logo2.svg";
import css from "./footer.css";
import phone from "../../images/icon-phone.svg";
import email from "../../images/icon-email.svg";

const Footer = () => {
  return (
    <section className="footer">
      <img src={logo} alt="logo-image" />

      <div className="wrapper">
        <div className="footer-contact">
          <p className="phone">
            <img src={phone} alt="phone-icon" />
            <span> Phone: +1-543-123-4567 </span>
          </p>
          <p className="mail">
            <img src={email} alt="mail-icon" />
            <span> example@fylo.com </span>
          </p>
        </div>
        <div className="link1">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="link2">
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="social">
          <p>
            <i class="fa-brands fa-facebook-f"></i>
          </p>
          <p>
            <i class="fa-brands fa-twitter"></i>
          </p>
          <p>
            <i class="fa-brands fa-instagram"></i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
