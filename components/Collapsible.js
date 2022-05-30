import { motion } from "framer-motion";
import { useState } from "react";

// Icons

import { ArrowRight } from "react-feather";

// CSS

import collapsibleStyles from "../styles/Collapsible.module.css";

const Collapsible = ({
  step,
  index,
  activeChallenge,
  setActiveChallenge,
  setActiveImage,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClick = (isCollapsed) => {
    if (isCollapsed) {
      if (activeChallenge !== index) {
        setActiveChallenge(index);
        setIsCollapsed(true);
      } else {
        setActiveChallenge(0);
        setIsCollapsed(false);
      }
    } else {
      setActiveChallenge(index);
      setIsCollapsed(true);
    }
  };

  return (
    <motion.div
      className={collapsibleStyles.collapsible}
      onClick={() => {
        handleClick(isCollapsed);
      }}
      variants={collapsibleVariants}
      initial='initial'
      animate={activeChallenge === index ? "animate" : "initial"}
      key={step.stepNo}
    >
      <div className={collapsibleStyles.collapsible_textbox}>
        <h3 className={collapsibleStyles.collapsible_title}>
          Step {step.stepNo}
        </h3>
        {activeChallenge === index && (
          <motion.span
            className={collapsibleStyles.collapsible_desc}
            variants={descriptionVariants}
            initial='initial'
            animate={activeChallenge === index ? "animate" : "initial"}
          >
            {step.description}
          </motion.span>
        )}
      </div>
      <div className={collapsibleStyles.collapsible_icon}>
        <motion.div
          variants={arrowVariants}
          initial='initial'
          animate={activeChallenge === index ? "animate" : "initial"}
        >
          <ArrowRight />
        </motion.div>
      </div>
    </motion.div>
  );
};

const collapsibleVariants = {
  initial: {
    background: "#D5D5D5",
    height: "auto",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
  animate: {
    background: "var(--orange)",
    height: "auto",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
};

const arrowVariants = {
  initial: {
    rotate: 90,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
  animate: {
    rotate: 0,
    padding: "5%",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
};

const descriptionVariants = {
  initial: {
    marginTop: 0,
    opacity: 0,
    y: -20,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
  animate: {
    marginTop: "2%",
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
};

export default Collapsible;
