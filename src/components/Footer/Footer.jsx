import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer__content">
        <div className="footer__content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            possimus ad magni alias, sequi tempore aliquid repellendus, natus
            iure facere illum nam soluta tenetur vitae hic expedita eius
            doloribus id.
          </p>
          <div className="footer__social-icons">
            <img src={assets.facebook_icon} alt="img" />
            <img src={assets.twitter_icon} alt=" img" />
            <img src={assets.facebook_icon} alt="omg" />
          </div>
        </div>
        <div className="footer__content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer__content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li> +91 7674927795</li>
            <li> contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer__copyright">
        Copyright 2025 @Tomato.com - All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
