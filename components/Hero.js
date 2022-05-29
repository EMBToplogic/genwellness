import Image from "next/image";

// CSS

import heroStyles from "../styles/Hero.module.css";

// Images

import Logotype from "../public/images/generali_logotype.png";

const Hero = () => {
  return (
    <div className={heroStyles.container} id='hero'>
      <div className={heroStyles.main_title_box}>
        <Image src={Logotype} alt='generali-logotype' />
        <h1>Welcome to Generali's GenWellness Road to Fitness for 2022</h1>
        <p>Powered by GenConnect</p>
      </div>
    </div>
  );
};

export default Hero;
