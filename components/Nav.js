import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

// Hooks
import useWindowSize from "../hooks/useWindowSize";

// CSS

import navStyles from "../styles/Nav.module.css";

// Images

import Logo from "../public/images/generali_logo_white.png";

// Icons

import { Menu, X } from "react-feather";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [height, width] = useWindowSize();

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("resize", (e) => {
        width = e.currentTarget.innerWidth;
        height = e.currentTarget.innerHeight;

        if (width > 480) {
          setIsNavOpen(false);
        }
      });
    }
  }, []);

  return (
    <div className={navStyles.nav}>
      <div className={navStyles.logo_container}>
        <Image src={Logo} alt='generali-logo' />
      </div>
      {width < 480 && (
        <>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              className={navStyles.mobile_toggle_cont}
              onClick={() => {
                setIsNavOpen(!isNavOpen);
              }}
              variants={menuVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition='transition'
              key={`toggler_${isNavOpen}`}
            >
              {isNavOpen && <X />}
              {!isNavOpen && <Menu />}
            </motion.div>
            {isNavOpen && (
              <motion.div
                className={navStyles.mobile_nav}
                style={{
                  height: height - 75,
                  width: width,
                }}
                variants={menuNavVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition='transition'
                key={`main_container_${isNavOpen}`}
              >
                <ul className={navStyles.main_ul}>
                  <motion.li
                    whileHover={hoverAnim}
                    className={navStyles.main_ul_li}
                    onClick={() => {
                      setIsNavOpen(false);
                    }}
                  >
                    <Link href='#home' scroll={false}>
                      Home
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={hoverAnim}
                    className={navStyles.main_ul_li}
                    onClick={() => {
                      setIsNavOpen(false);
                    }}
                  >
                    <Link href='#ongoing' scroll={false}>
                      Ongoing
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={hoverAnim}
                    className={navStyles.main_ul_li}
                    onClick={() => {
                      setIsNavOpen(false);
                    }}
                  >
                    <Link href='#join' scroll={false}>
                      Join
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={hoverAnim}
                    className={navStyles.main_ul_li}
                    onClick={() => {
                      setIsNavOpen(false);
                    }}
                  >
                    <Link href='#mechanics' scroll={false}>
                      Mechanics
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={hoverAnim}
                    className={navStyles.main_ul_li}
                    onClick={() => {
                      setIsNavOpen(false);
                    }}
                  >
                    <Link href='#how-to' scroll={false}>
                      How To's
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={hoverAnim}
                    className={navStyles.main_ul_li}
                    onClick={() => {
                      setIsNavOpen(false);
                    }}
                  >
                    <Link href='#challenges' scroll={false}>
                      Challenges
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
      {width > 480 && (
        <ul className={navStyles.main_ul}>
          <motion.li whileHover={hoverAnim} className={navStyles.main_ul_li}>
            <Link href='#home' scroll={false}>
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
      )}
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

const menuVariants = {
  initial: {
    opacity: 0,
    x: 5,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -5,
  },
  transition: {
    ease: [0.6, 0.01, -0.05, 0.95],
    duration: 0.2,
  },
};

const menuNavVariants = {
  initial: {
    opacity: 0,
    x: 10,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -10,
  },
  transition: {
    ease: [0.6, 0.01, -0.05, 0.95],
    duration: 0.5,
  },
};

export default Nav;
