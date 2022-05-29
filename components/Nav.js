import Image from "next/image";
import Link from "next/link";

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
        <li className={navStyles.main_ul_li}>
          <Link href='#hero' scroll={false}>
            Home
          </Link>
        </li>
        <li className={navStyles.main_ul_li}>
          <Link href='#ongoing' scroll={false}>
            Ongoing
          </Link>
        </li>
        <li className={navStyles.main_ul_li}>
          <Link href='#join' scroll={false}>
            Join
          </Link>
        </li>
        <li className={navStyles.main_ul_li}>
          <Link href='#mechanics' scroll={false}>
            Mechanics
          </Link>
        </li>
        <li className={navStyles.main_ul_li}>
          <Link href='#how-to' scroll={false}>
            How To's
          </Link>
        </li>
        <li className={navStyles.main_ul_li}>
          <Link href='#challenges' scroll={false}>
            Challenges
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
