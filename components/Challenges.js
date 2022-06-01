import dayjs from "dayjs";
import Link from "next/link";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";

// Hooks

import useWindowSize from "../hooks/useWindowSize";

// CSS

import challengesStyles from "../styles/Challenges.module.css";

const bgStyles = ["var(--primary-gradient)", "var(--secondary-gradient)"];

const Challenges = ({ challenges, setActiveChallenge }) => {
  const [height, width] = useWindowSize();

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("resize", (e) => {
        width = e.currentTarget.innerWidth;
      });
    }
  }, []);
  return (
    <div
      className={challengesStyles.container}
      id='challenges'
      style={{ height: height / 1.5, width: width }}
    >
      <div className={challengesStyles.title}>Other Challenges</div>
      <div className={challengesStyles.table}>
        {challenges.data.map((challenge, index) => {
          return (
            <Link href='#ongoing' scroll={false} key={challenge.challengecode}>
              <div
                className={challengesStyles.card}
                onClick={() => setActiveChallenge(challenges.data[index])}
              >
                <div
                  className={challengesStyles.image_container}
                  style={{
                    backgroundImage: `url("${challenge.image}")`,
                  }}
                ></div>
                <div
                  className={challengesStyles.card_textbox}
                  style={{
                    background: [...bgStyles][
                      challenge.status === "ongoing" ? 0 : 1
                    ],
                  }}
                >
                  <div className={challengesStyles.card_title}>
                    {challenge.title}
                  </div>
                  <div className={challengesStyles.card_description}>
                    {challenge.description.length > 100
                      ? challenge.description.substring(0, 100) + "..."
                      : challenge.description}
                  </div>
                  <div className={challengesStyles.date}>
                    {dayjs(challenge.startdate).format("MMM D")} to{" "}
                    {dayjs(challenge.enddate).format("MMM DD, YYYY")}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Challenges;
