import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
   const { activeChallenges, resetChallenge } = useContext(ChallengesContext)  
    
  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenges ? (
        <div className={styles.challengetActive}>
          <header>Ganhe {activeChallenges.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenges.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenges.description}</p>
          </main>
          <footer>
            <button 
            type="button"
            className={styles.challengeFailedButton}
            onClick={resetChallenge}
            
            >
                Falhei
            </button>
            <button 
            type="button"
            className={styles.challengeSucceededdButton}
            
            >
                Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Finalize um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de nível completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
