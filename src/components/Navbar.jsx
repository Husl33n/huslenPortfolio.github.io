import Hamburger from "hamburger-react";
import React, { useState, useRef } from "react";
import { styles } from "../styles";

  const Navbar = () => {
  let list = document.querySelector("ul");
  return (
    <div className="shadow bg-white">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <nav className="md:flex md:items-center md:justify-between p-1 ">
          <div className="flex justify-between items-center gap-4">
            <span className="flex items-center text-4xl font-bold cursor-pointer">
              <img
                src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFroBand&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=MoustacheFancy&facialHairColor=Red&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Angry&mouthType=Twinkle&skinColor=Tanned"
                className="object-cover h-12"
              />
            </span>
            <span className="md:hidden text-3xl cursor-pointer">
              <Hamburger
                onToggle={(toggle) => {
                  if (toggle) {
                    list.classList.remove("absolute");
                    list.classList.remove("opacity-0");
                    list.classList.remove("top-[80px]");
                  } else {
                    list.classList.add("absolute");
                    list.classList.add("opacity-100");
                    list.classList.add("top-[80px]");
                  }
                }}
              />
            </span>
          </div>
          <ul className="md:flex gap-8 z-[-1] md:z-auto md:static absolute md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0  transition-all ease-in duration-500">
            <div className="flex flex-col items-center md:flex-row md:gap-8">
              <li id="Home" className="my-4">
                <a
                  href="#"
                  className="text-3xl md:text-xl hover:text-cyan-500 duration-500"
                >
                  Нүүр
                </a>
              </li>
              <li className="my-4">
                <a
                  href="#"
                  className="text-3xl md:text-xl hover:text-cyan-500 duration-500"
                >
                  Ажил
                </a>
              </li>
              <li className="my-4">
                <a
                  href="#"
                  className="text-3xl md:text-xl hover:text-cyan-500 duration-500"
                >
                  Боловсрол / туршлага
                </a>
              </li>
              <li className="my-4">
                <a
                  href="#"
                  className="bg-cyan-400 text-white px-6 py-2 text-3xl md:text-xl hover:bg-cyan-500 duration-500 rounded-full"
                >
                  Холбогдох
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
