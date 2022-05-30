import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

// Data

import steps from "../data/steps.json";

// Components

import Collapsible from "./Collapsible";

// Icons

import { XCircle } from "react-feather";

// Images

import step_1_1 from "../public/images/how-tos/step-1-1.png";
import step_1_2 from "../public/images/how-tos/step-1-2.png";

import step_2_1 from "../public/images/how-tos/step-2-1.png";
import step_2_2 from "../public/images/how-tos/step-2-2.png";

import step_3_1 from "../public/images/how-tos/step-3-1.png";
import step_3_2 from "../public/images/how-tos/step-3-2.png";
import step_3_3 from "../public/images/how-tos/step-3-3.png";

// CSS

import modalStyles from "../styles/Modal.module.css";

const Modal = ({ isModalOpen, setIsModalOpen, modalType }) => {
  const [modalTitle, setModalTitle] = useState("");
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [activeImage, setActiveImage] = useState("");

  const filteredSteps = steps.filter((stepRes) => {
    if (stepRes.stepType === modalType) {
      return stepRes;
    } else {
      return;
    }
  });

  const handleImage = (modalType, activeImage) => {
    if (activeChallenge > 0) {
      switch (modalType) {
        case 1:
          switch (activeChallenge) {
            case 1:
              setActiveImage(step_1_1);
              break;
            case 2:
              setActiveImage(step_1_2);
              break;
          }
          break;
        case 2:
          switch (activeChallenge) {
            case 1:
              setActiveImage(step_2_1);
              break;
            case 2:
              setActiveImage(step_2_2);
              break;
          }
          break;
        default:
          switch (activeChallenge) {
            case 1:
              setActiveImage(step_3_1);
              break;
            case 2:
              setActiveImage(step_3_2);
              break;
            case 3:
              setActiveImage(step_3_3);
              break;
          }
      }
    }
  };

  useEffect(() => {
    handleImage(modalType, activeChallenge);
  }, [activeChallenge]);

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

  const imageVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
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
                return (
                  <Collapsible
                    step={step}
                    index={index + 1}
                    activeChallenge={activeChallenge}
                    setActiveChallenge={setActiveChallenge}
                    key={index}
                  />
                );
              })}
            </div>
            <div className={modalStyles.image_container}>
              {activeImage && activeChallenge > 0 && (
                <Image
                  className={modalStyles.image_active}
                  src={activeImage}
                  layout={"intrinsic"}
                  objectFit={"contain"}
                  placeholder='blur'
                  key={activeImage}
                />
              )}
              {activeChallenge === 0 && (
                <>
                  <span
                    style={{
                      color: "var(--black)",
                    }}
                  >
                    Select a step to get started.
                  </span>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
