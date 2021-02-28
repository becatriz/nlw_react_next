import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
  const {
    level,
    challengesCompleted,
    currentExperience,
    closeLevelUpModal,
  } = useContext(ChallengesContext);


  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.avancedLevelUpModal}>
          <header>{level}</header>
          <strong>Avancei para o próximo nível</strong>
        </div>

        <div className={styles.challengesCompleted}>
          <span>Desafios</span>
          <p>{challengesCompleted.toString()} completados</p>
          <span>Experiência</span>
          <p>{currentExperience.toString()} xp</p>
        </div>

        <button
          className={styles.closeModal}
          type="button"
          onClick={closeLevelUpModal}
        >
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
        <a
          className={styles.sharedOnTwitter}
          href="https://twitter.com/intent/tweet?url=https://nlw-react-next.vercel.app/&amp;text=Yupi!!! Completei mais um desafio&amp;"
          
        >
          Compartilhar no Twitter
          <img src="/icons/twitter.svg" alt="Logo Twitter" />
        </a>
      </div>
    </div>
  );
}
