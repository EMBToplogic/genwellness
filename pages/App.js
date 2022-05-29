import { useState } from "react";

// Components

import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Ongoing from "../components/Ongoing";
import Join from "../components/Join";
import Mechanics from "../components/Mechanics";
import Challenges from "../components/Challenges";
import Meta from "../components/Meta";
import HowTos from "../components/HowTos";
import Modal from "../components/Modal";

// CSS
import styles from "../styles/Home.module.css";

export default function Home({ challenges }) {
  const [activeChallenge, setActiveChallenge] = useState(challenges.data[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(0);
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Nav />
        {isModalOpen && (
          <Modal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            modalType={modalType}
          />
        )}
        <Hero />
        <Ongoing activeChallenge={activeChallenge} />
        <Join />
        <Mechanics />
        <HowTos setIsModalOpen={setIsModalOpen} setModalType={setModalType} />
        <Challenges
          challenges={challenges}
          setActiveChallenge={setActiveChallenge}
        />
      </div>
    </>
  );
}
