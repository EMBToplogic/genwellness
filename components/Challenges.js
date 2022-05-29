import dayjs from "dayjs";
import Link from "next/link";

// CSS

import challengesStyles from "../styles/Challenges.module.css";

const bgStyles = ["var(--primary-gradient)", "var(--secondary-gradient)"];

const Challenges = ({ challenges, setActiveChallenge }) => {
  return (
    <div className={challengesStyles.container} id='challenges'>
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
