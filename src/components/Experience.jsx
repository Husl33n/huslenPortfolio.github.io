import React from "react";
import ExperienceItem from "./ExperienceItem";
import experience from "../data/experience";
import Title from "./Title";

const Experience = () => {
  return (
    <>
    <div className="px-8 flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12 ">
        <Title>Туршлага</Title>
        {experience.map((item) => (
          <ExperienceItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Experience;
