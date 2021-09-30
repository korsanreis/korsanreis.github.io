import React, { useEffect } from "react";
import SkillBar from "react-skillbars";
import { useSelector, useDispatch } from "react-redux";
import { getSkills } from "../../../actions/skillAction";
import {useTranslation} from "react-i18next";

const Skills = ({ reff }) => {
  const {t} = useTranslation();
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);

  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9",
    },
  };

  return (
    <div ref={reff} className="pt-0 pb-5" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-4">
          {t('fo9.21')}
        </h2>
        <SkillBar
          skills={skills}
          colors={colors}
          animationDuration={4000}
        ></SkillBar>
      </div>
    </div>
  );
};

export default Skills;
