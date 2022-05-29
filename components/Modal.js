import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

// Data

import steps from "../data/steps.json";

// Components

import Collapsible from "./Collapsible";

// Icons

import { XCircle } from "react-feather";

// CSS

import modalStyles from "../styles/Modal.module.css";

const Modal = ({ isModalOpen, setIsModalOpen, modalType }) => {
  const [modalTitle, setModalTitle] = useState("");

  const filteredSteps = steps.filter((stepRes) => {
    if (stepRes.stepType === modalType) {
      return stepRes;
    } else {
      return;
    }
  });

  useEffect(() => {
    switch (modalType) {
      case 1:
        setModalTitle("How To Access GenWellness via GenConnect");
        break;
      case 2:
        setModalTitle("How to view GenWellness Group Challenges");
        break;
      default:
        setModalTitle("How to join Group Challenges");
        return;
    }
  }, [modalType]);

  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    });

    return () => {
      window.removeEventListener("keyup", (e) => {
        if (e.key === "Escape") {
          setIsModalOpen(false);
        }
      });
    };
  }, []);

  const modalBGVariants = {
    initial: {
      opacity: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.5,
      },
    },
    animate: {
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.5,
      },
    },
  };

  const modalVariants = {
    initial: {
      top: "45%",
    },
    animate: {
      top: "50%",
    },
    exit: {
      top: "55%",
    },
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={modalStyles.container}
        variants={modalBGVariants}
        initial='initial'
        animate={isModalOpen ? "animate" : "initial"}
        exit='exit'
        key={isModalOpen}
      >
        <motion.div
          className={modalStyles.modal_inner}
          variants={modalVariants}
          initial='initial'
          animate={isModalOpen ? "animate" : "initial"}
          exit='exit'
          transition='transition'
          key={isModalOpen}
        >
          <div className={modalStyles.modal_header}>
            <div className={modalStyles.modal_title}>{modalTitle}</div>
            <XCircle
              style={{ cursor: "pointer" }}
              onClick={() => setIsModalOpen(false)}
            />
          </div>
          <div className={modalStyles.modal_content}>
            <div className={modalStyles.table}>
              {filteredSteps.map((step, index) => {
                return <Collapsible step={step} index={index + 1} />;
              })}
            </div>
            <div className={modalStyles.image_container}></div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
