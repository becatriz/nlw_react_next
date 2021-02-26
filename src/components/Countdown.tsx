import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/Countdown.module.css";



export function Countdown() {
 
  const { minutes, seconds,isActive, hasFinished, resetCountDown, startCountDown} = useContext(CountdownContext)  
    

  //padStart: ex "5" preenche ao lado esquerdo com um "0"
  const [minuteLeft, minuteLefRight] = String(minutes)
    .padStart(2, "0")
    .split("");
  const [secondLeft, secondLefRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteLefRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondLefRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo Finalizado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountDown}
            >
              Abandonar cliclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountDown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
