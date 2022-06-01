import Image from "next/image";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

// Hooks
import useWindowSize from "../hooks/useWindowSize";

// CSS

import heroStyles from "../styles/Hero.module.css";

// Images

import Logotype from "../public/images/generali_logotype.png";

const Hero = () => {
  const [height, width] = useWindowSize();

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("resize", (e) => {
        width = e.currentTarget.innerWidth;
        height = e.currentTarget.innerHeight;
      });
    }
  }, []);

  return (
    <div
      className={heroStyles.container}
      id='home'
      style={{
        height: height,
        width: width,
      }}
    >
      <div className={heroStyles.main_title_box}>
        <Image src={Logotype} alt='generali-logotype' size={"responsive"} />
        <h1 className={heroStyles.title}>
          Welcome to Generali's GenWellness Road to Fitness for 2022
        </h1>
        <p className={heroStyles.title_sub}>Powered by GenConnect</p>
      </div>
    </div>
  );
};

export default Hero;
