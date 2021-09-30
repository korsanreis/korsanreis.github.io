
import React, {useRef, useState} from "react";
import "../Navbar/styles.css";
import logo from "../../../assets/images/basry-logo.png";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18n from "../../User/i18n1";
import Flag from 'react-flagkit';







const Navbar = ({ onLinkClick }) => {
  const [toggler, setToggler] = useState(true);
  const [navbar, setNavbar] = useState(false);


  const changeBackground = () => {
    window.scrollY > window.screen.height - window.screen.height * 0.27
      ? setNavbar(true)
      : setNavbar(false);
  };
  window.addEventListener("scroll", changeBackground);

    const {t} = useTranslation();


    const changelanguage = (lng) => {
      i18n.changeLanguage(lng)
    }


  return (



    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar navbar-fixed-top py-3 ${
        navbar ? "navbar-scroll-color" : "rgba-gradient-nav"
      }`}
    >
      <div className="container-fluid mx-3">
        <Link className="navbar-brand" to="/">
          <img alt="logo" src={logo} width="100" />
        </Link>
        <button
          className="navbar-toggler costmusetoggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setToggler(!toggler)}
        >
          <i
            className={`fas ${toggler ? "fa-bars" : "fa-times"} fa-lg`}
            style={{ color: "black" }}
          ></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  smooth-scroll ms-lg-5">
            <li className="nav-item">
              <Link
                onClick={() => onLinkClick("homeSection")}
                className="nav-link"
                to="/"
              >
                {t('why.1')}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => onLinkClick("aboutSection")}
                className="nav-link"
                to="/"
                data-offset="90"
              >
                {t('p.2')}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => onLinkClick("educationSection")}
                className="nav-link"
                to="/"
                data-offset="90"
              >
                {t('e.3')}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => onLinkClick("experienceSection")}
                className="nav-link"
                to="/"
                data-offset="90"
              >
                {t('i.4')}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                onClick={() => onLinkClick("skillSection")}
                className="nav-link"
                data-offset="30"
              >
                {t('y.6')}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => onLinkClick("projectSection")}
                className="nav-link"
                to="/"
                data-offset="90"
              >
                {t('k.7')}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => onLinkClick("contactSection")}
                className="nav-link"
                data-offset="90"
                to="/"
              >
                {t('il.8')}
              </Link>
            </li>
          </ul>


          <ul className="navbar-nav  ms-auto list">
            <li className="nav-item  list-item">
              <div class="d-flex justify-content-evenly">
                <Flag
                    country="TR"
                    size={40}
                    role="button" onClick={() => changelanguage("ko")}/>

                <Flag
                    country="GB"
                    size={40}
                    role="button" onClick={() => changelanguage("en")}/>
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">

                <a className="btn btn-primary me-md-2" href="../../Erdem_Celik_CV.pdf" target="_blank">CV İndir</a>

                <a  className="btn btn-primary" href="../../Erdem_Resume.pdf" target="_blank">Resume</a>

              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

};


export default Navbar;
