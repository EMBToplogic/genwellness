import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Util

import { getRemainingTimeUntilMsTimestamp } from "./utils/CountdownTimerUtils";

// CSS

import countdownStyles from "../styles/CountdownTimer.module.css";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const countdownVariants = {
  initial: {
    opacity: 0,
    rotateX: 30,
    y: 10,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.3,
      delay: 0,
    },
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.3,
      delay: 0,
    },
  },
  exit: {
    opacity: 0,
    rotateX: -30,
    y: -10,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.3,
      delay: 0,
    },
  },
};

const CountdownTimer = ({ challengeDate, countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(challengeDate);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownTimestampMs, challengeDate]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }
  return (
    <div className={countdownStyles.container}>
      <div className={countdownStyles.timer_card}>
        <AnimatePresence exitBeforeEnter>
          <motion.span
            className={countdownStyles.timer_main_no}
            variants={countdownVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            key={remainingTime.days}
          >
            {remainingTime.days}
          </motion.span>
        </AnimatePresence>
        <span>Days</span>
      </div>
      <div>:</div>
      <div className={countdownStyles.timer_card}>
        <AnimatePresence exitBeforeEnter>
          <motion.span
            className={countdownStyles.timer_main_no}
            variants={countdownVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            key={remainingTime.hours}
          >
            {remainingTime.hours}
          </motion.span>
        </AnimatePresence>
        <span>Hours</span>
      </div>
      <div>:</div>
      <div className={countdownStyles.timer_card}>
        <AnimatePresence exitBeforeEnter>
          <motion.span
            className={countdownStyles.timer_main_no}
            variants={countdownVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            key={remainingTime.minutes}
          >
            {remainingTime.minutes}
          </motion.span>
        </AnimatePresence>
        <span>Minutes</span>
      </div>
      <div>:</div>
      <div className={countdownStyles.timer_card}>
        <AnimatePresence exitBeforeEnter>
          <motion.span
            className={countdownStyles.timer_main_no}
            variants={countdownVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            key={remainingTime.seconds}
          >
            {remainingTime.seconds}
          </motion.span>
        </AnimatePresence>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
