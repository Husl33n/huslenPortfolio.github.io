import React, { useRef } from "react";
import Navbar from "./Navbar";
import { styles } from "../styles";

const Intro = () => {
  return (
    <>
      <section class="mt-28" >
        <div class="md:flex md:gap-4 w-full md:w-9/12 px-8 mx-auto">
          <div class="md:flex-1 mr-auto place-self-center">
            <h1
              class={`${styles.heroSubHeadText} tracking-tight leading-none md:text-5xl`}
            >
              👋Сайн уу! Би бол
            </h1>
            <h1 class={`${styles.heroHeadText} mb-4 tracking-tight leading-none md:text-5xl`}>Хүслэн</h1>
            <p
              class={`${styles.heroSubText} max-w-2xl mb-6 font-light text-gray-500 md:text-xl`}
            >
              Шинэ чадварт суралцан, үнэтэй туршлагыг олж, нөөц боломжоо нээн, эрүүл харилцаа, найз нөхөд бол миний үнэт зүйл.  
            </p>
            <a
              href="#"
              class="inline-flex px-5 py-3 font-bold bg-stone-100 text-gray-900 border border-gray-600 rounded-lg hover:bg-gray-200"
            >
              Надтай холбогдох
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex md:flex-1 animate-float_X mix-blend-darken">
            <img src="src\assets\intro_albert.jpg" alt="mockup" className="" />
          </div>
        </div>
        
      </section>
      
    </>
  );
};

export default Intro;
