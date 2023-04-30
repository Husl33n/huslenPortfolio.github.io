import React from "react";
import Title from "./Title";

const Skill = () => {
  return (
    <div className="mb-20 flex flex-col items-center justify-center md:w-7/12">
      <Title>Мэдлэг</Title>
      <div className="flex flex-1 flex-row items-center justify-center flex-wrap gap-4">
        <div className=" bg-stone-200 shadow-2xl p-5 rounded-full">
          <img className=" h-20" src="assets/skills/html.png" alt="" />
        </div>
        <div className=" bg-stone-200 shadow-2xl p-5 rounded-full">
          <img className=" h-20" src="assets/skills/css.png" alt="" />
        </div>
        <div className=" bg-stone-200 shadow-2xl p-5 rounded-full">
          <img className=" h-20" src="assets/skills/tailwindcss.png" alt="" />
        </div>
        <div className=" bg-stone-200 shadow-2xl p-5 rounded-full">
          <img className=" h-20" src="assets/skills/javascript.png" alt="" />
        </div>
        <div className=" bg-stone-200 shadow-2xl p-5 rounded-full">
          <img className=" h-20" src="assets/skills/reactjs.png" alt="" />
        </div>
        <div className=" bg-stone-200 shadow-2xl p-5 rounded-full">
          <img className=" h-20" src="assets/skills/java.png" alt="" />
        </div>
        <div className=" bg-stone-200 shadow-2xl p-5 rounded-full">
          <img className=" h-20" src="assets/skills/csharp.png" alt="" />
        </div>
        <div className=" bg-stone-200 shadow-2xl p-5 rounded-full">
          <img className=" h-20" src="assets/skills/mysql.png" alt="" />
        </div>
        <div className=" bg-stone-200 shadow-2xl p-5 rounded-full">
          <img className=" h-20" src="assets/skills/ps.png" alt="" />
        </div>
        <div className=" bg-stone-200 shadow-2xl p-5 rounded-full">
          <img className=" h-20" src="assets/skills/github.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
