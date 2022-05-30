import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// CSS

import navStyles from "../styles/Nav.module.css";

// Images

import Logo from "../public/images/generali_logo_white.png";

const Nav = () => {
  return (
    <div className={navStyles.nav}>
      <div className={navStyles.logo_container}>
        <Image src={Logo} alt='generali-logo' />
      </div>
      <ul className={navStyles.main_ul}>
        <motion.li whileHover={hoverAnim} className={navStyles.main_ul_li}>
          <Link href='#hero' scroll={false}>
            Home
          </Link>
        </motion.li>
        <motion.li whileHover={hoverAnim} className={navStyles.main_ul_li}>
          <Link href='#ongoing' scroll={false}>
            Ongoing
          </Link>
        </motion.li>
        <motion.li whileHover={hoverAnim} className={navStyles.main_ul_li}>
          <Link href='#join' scroll={false}>
            Join
          </Link>
        </motion.li>
        <motion.li whileHover={hoverAnim} className={navStyles.main_ul_li}>
          <Link href='#mechanics' scroll={false}>
            Mechanics
          </Link>
        </motion.li>
        <motion.li whileHover={hoverAnim} className={navStyles.main_ul_li}>
          <Link href='#how-to' scroll={false}>
            How To's
          </Link>
        </motion.li>
        <motion.li whileHover={hoverAnim} className={navStyles.main_ul_li}>
          <Link href='#challenges' scroll={false}>
            Challenges
          </Link>
        </motion.li>
      </ul>
    </div>
  );
};

const hoverAnim = {
  scale: 1.2,
  transition: {
    ease: [0.6, 0.01, -0.05, 0.95],
    duration: 0.5,
  },
};

export default Nav;
