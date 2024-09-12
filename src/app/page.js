"use client";

import React, { useState } from "react";
import female from '../../public/img/female.png'; 
import styles from './page.module.css'; 

function App() {
  const [screen, setScreen] = useState(1);

  const handleScreenChange = (nextScreen) => {
    setScreen(nextScreen);
  };

  return (
    <div className={styles.container}>
      {screen === 1 && (
        <>
         
          <div className={styles.leftSide}>
            <h1 className={styles.title}>ProVest</h1>
            <div className={styles.imageContainer}>
              <img src={female} alt="Image" className={styles.image} />
            </div>
          </div>
          
          <div className={styles.rightSide}>
            <p className={styles.message}>
              OLÁ, ESTAMOS MUITO FELIZES POR TE VER POR AQUI!
            </p>
            <div className={styles.buttonsContainer}>
              <button
                className={styles.button}
                // onClick={() => handleScreenChange(2)}
              >
                SOU ALUNO
              </button>
              <button
                className={styles.button}
                // onClick={() => handleScreenChange(3)}
              >
                SOU PROFESSOR
              </button>
            </div>
          </div>
        </>
      )}
  
</div>
  );
}

export default App;
