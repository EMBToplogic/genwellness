import React from "react";
import Image from "next/image";

// Images

import GeneraliLogo from "../public/images/generali_logo_white.png";
import TCCLogo from "../public/images/tcc_logo_white.png";

// CSS

import footerStyles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={footerStyles.container}>
      <div>
        <Image src={GeneraliLogo} alt='generali-logo' />
      </div>
      <div className={footerStyles.footer_description}>
        Powered by TopLogic Consulting Corporation © 2022. All Rights Reserved.
        All trademarks are owned by their respective owners in the Philippines
        and in other countries.
      </div>
      <div>
        <Image src={TCCLogo} alt='toplogic-logo' />
      </div>
    </div>
  );
};

export default Footer;
