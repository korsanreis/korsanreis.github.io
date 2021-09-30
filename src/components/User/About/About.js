import React from "react";
import profil from "../../../assets/images/profil.png";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import {useTranslation} from "react-i18next";




const About = ({ reff }) => {
  const {t} = useTranslation();
  return (
    <section
      ref={reff}
      id="about"
      className="py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          {t('p.2')}
        </h2>

        <div className="row">
          <div className="col-12 col-lg-4">
            <img className="d-block mx-auto mb-4" src={profil} alt="profil" />
          </div>
          <div className="col-lg-8">
            <p className="text-font text-justify">
              {t('int.10')}
              <br />
              <br />
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
