import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <span className="creator">
          <a href="https://github.com/Sumittripathi07" target="_blank">
            {" "}
            Sumit Tripathi{" "}
          </a>
        </span>
        <ul className="social-network social-circle">
          <li>
            <a
              className="icoLinkedin"
              href="https://www.linkedin.com/in/sumit-tripathi-932bb31b5/"
              title="Linkedin"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              className="icoTwitter"
              href="https://twitter.com/iamSumit076"
              title="Twitter"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              className="icoFacebook"
              href="https://www.facebook.com/sumittripathi07"
              title="Facebook"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              className="icoInstagram"
              href="https://www.instagram.com/sumittripathi07/"
              title="Instagram"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
