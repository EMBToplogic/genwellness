import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import Image from "next/image";

// Hooks

import useWindowSize from "../hooks/useWindowSize";

// Images

import GeneraliLogo from "../public/images/generali_logo_white.png";
import TCCLogo from "../public/images/tcc_logo_white.png";

// CSS

import footerStyles from "../styles/Footer.module.css";

const Footer = () => {
  const [height, width] = useWindowSize();

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("resize", (e) => {
        width = e.currentTarget.innerWidth;
      });
    }
  }, []);

  return (
    <div className={footerStyles.container}>
      {width > 480 && (
        <div>
          <Image src={GeneraliLogo} alt='generali-logo' />
        </div>
      )}
      <div className={footerStyles.footer_description}>
        Powered by TopLogic Consulting Corporation © 2022. All Rights Reserved.
        All trademarks are owned by their respective owners in the Philippines
        and in other countries.
      </div>
      {width > 480 && (
        <div>
          <Image src={TCCLogo} alt='toplogic-logo' />
        </div>
      )}
    </div>
  );
};

export default Footer;
