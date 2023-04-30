import React from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Navbar from "./components/Navbar";

import "./styles/tailwind.css";

const App = () => {
  return (
    <>
      {/* bg-[url(src/assets/blob1.svg)] bg-cover bg-[50%] object-cover */}
      <div className="flex items-center justify-between overflow-x-hidden bg-stone-100 text-stone-900 min-h-screen font-inter">
        <div className="bg-center bg-dotted-spacing-4 bg-dotted-stone-400 hover:bg-dotted-spacing-16 transition-all duration-[25000ms] ease-in-out">
          <div className="">
            <Navbar />
            <div className=" overflow-x-hidden opacity-100">
              <div className="flex items-center justify-center flex-col h-auto w-screen mx-auto ">
                <Intro  />
                <Portfolio />
                <Timeline />
              </div>
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
