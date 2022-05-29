import { useEffect, useState } from "react";

// Components

import CountdownTimer from "./CountdownTimer";

// CSS

import ongoingStyles from "../styles/Ongoing.module.css";

const Ongoing = ({ activeChallenge }) => {
  const [activeEndDate, setActiveEndDate] = useState(activeChallenge.enddate);
  useEffect(() => {
    setActiveEndDate(activeChallenge.enddate);
  }, [activeChallenge]);
  return (
    <>
      <div className={ongoingStyles.container} id='ongoing'>
        <div className={ongoingStyles.card}>
          <h1 className={ongoingStyles.challenge_title}>
            {activeChallenge.title}
          </h1>
          <p className={ongoingStyles.challenge_desc}>
            {activeChallenge.description}
          </p>
          <div className={ongoingStyles.timer_main}>
            <CountdownTimer
              challengeDate={activeEndDate}
              countdownTimestampMs={1643673600000}
            />
          </div>
        </div>
        <div
          className={ongoingStyles.bg_container}
          style={{
            backgroundImage: `url("${activeChallenge.image}")`,
          }}
        ></div>
      </div>
    </>
  );
};

export default Ongoing;
