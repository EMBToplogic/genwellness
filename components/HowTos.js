import Image from "next/image";
import { motion } from "framer-motion";

// Images

import ht_1 from "../public/images/img_ht_1.png";
import ht_2 from "../public/images/img_ht_2.png";
import ht_3 from "../public/images/img_ht_3.png";

// Icons

import { Play } from "react-feather";

// CSS

import howToStyles from "../styles/HowTos.module.css";

const hoverAnim = {
  scale: 1.1,
  transition: {
    ease: [0.6, 0.01, -0.05, 0.95],
    duration: 0.3,
    delay: 0,
  },
};

const HowTos = ({ setIsModalOpen, setModalType }) => {
  return (
    <div className={howToStyles.container} id='how-to'>
      <div className={howToStyles.title}>How To's</div>
      <div className={howToStyles.table}>
        <div className={howToStyles.card}>
          <motion.div
            className={howToStyles.card_image_container}
            whileHover={hoverAnim}
            onClick={() => {
              setIsModalOpen(true);
              setModalType(1);
            }}
          >
            <Play className={howToStyles.card_icon} />
            <Image
              src={ht_1}
              style={{ opacity: 0.5 }}
              layout={"intrinsic"}
              objectFit={"cover"}
            />
          </motion.div>
          <div className={howToStyles.card_title}>
            How To Access GenWellness via GenConnect
          </div>
        </div>
        <div className={howToStyles.card}>
          <motion.div
            className={howToStyles.card_image_container}
            whileHover={hoverAnim}
            onClick={() => {
              setIsModalOpen(true);
              setModalType(2);
            }}
          >
            <Play className={howToStyles.card_icon} />
            <Image
              src={ht_2}
              style={{ opacity: 0.5 }}
              layout={"intrinsic"}
              objectFit={"cover"}
            />
          </motion.div>
          <div className={howToStyles.card_title}>
            How to view GenWellness Group Challenges
          </div>
        </div>
        <div className={howToStyles.card}>
          <motion.div
            className={howToStyles.card_image_container}
            whileHover={hoverAnim}
            onClick={() => {
              setIsModalOpen(true);
              setModalType(3);
            }}
          >
            <Play className={howToStyles.card_icon} />
            <Image
              src={ht_3}
              style={{ opacity: 0.5 }}
              layout={"intrinsic"}
              objectFit={"cover"}
            />
          </motion.div>
          <div className={howToStyles.card_title}>
            How to join Group Challenges
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTos;
