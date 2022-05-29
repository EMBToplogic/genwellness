import Image from "next/image";

// Images

import icon_1 from "../public/icons/ic_genconnect_logo.png";
import icon_2 from "../public/icons/ic_user.png";
import icon_3 from "../public/icons/ic_challenge.png";
import icon_4 from "../public/icons/ic_star.png";

// CSS

import joinStyles from "../styles/Join.module.css";

const Join = () => {
  return (
    <>
      <div className={joinStyles.container} id='join'>
        <div className={joinStyles.title}>How to Join?</div>
        <div className={joinStyles.table}>
          <div
            className={joinStyles.card}
            style={{
              background: "var(--primary-gradient)",
            }}
          >
            <div className={joinStyles.card_no}>1</div>
            <Image
              src={icon_1}
              alt='genconnect-logo'
              className={joinStyles.card_image}
              layout={"fill"}
              objectFit={"scale-down"}
            />
            <div className={joinStyles.card_desc}>
              Download the GenConnect App and Register.
            </div>
          </div>
          <div
            className={joinStyles.card}
            style={{
              background: "var(--secondary-gradient)",
            }}
          >
            <div className={joinStyles.card_no}>2</div>
            <Image
              src={icon_2}
              alt='user-icon'
              className={joinStyles.card_image}
              layout={"fill"}
              objectFit={"scale-down"}
            />
            <div className={joinStyles.card_desc}>
              Go to our GenWellness features.
            </div>
          </div>
          <div
            className={joinStyles.card}
            style={{
              background: "var(--tertiary-gradient)",
            }}
          >
            <div className={joinStyles.card_no}>3</div>
            <Image
              src={icon_3}
              alt='challenge-icon'
              className={joinStyles.card_image}
              layout={"fill"}
              objectFit={"scale-down"}
            />
            <div className={joinStyles.card_desc}>
              Choose your Challenge and Team.
            </div>
          </div>
          <div
            className={joinStyles.card}
            style={{
              background: "var(--quaternary-gradient)",
            }}
          >
            <div className={joinStyles.card_no}>4</div>
            <Image
              src={icon_4}
              alt='star-icon'
              className={joinStyles.card_image}
              layout={"fill"}
              objectFit={"scale-down"}
            />
            <div className={joinStyles.card_desc}>
              Compete and enjoy the race!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
