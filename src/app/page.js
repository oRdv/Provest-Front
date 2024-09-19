import React from "react";
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';


function App() {
  return (
    <div className={styles.container}>
      <>
        <div className={styles.leftSide}>
          <h1 className={styles.title}>ProVest</h1>
          {/* <div className={styles.imageContainer}>
            <Image
              src="./public/img/female.png"
              width={360}
              height={300}
              alt="Desenho de uma mulher pensando"
            />
          </div> */}
        </div>

        <div className={styles.rightSide}>
          <p className={styles.message}>
            OLÁ, ESTAMOS MUITO FELIZES POR TE VER POR AQUI!
          </p>

          <div className={styles.buttonsContainer}>
            <Link href="./loginAluno/page" className={styles.button}>
              
                SOU ALUNO
              
            </Link>

            <Link href="./loginProfessor/page" className={styles.button}>
              
                SOU PROFESSOR
              
            </Link>

          </div>
        </div>
      </>
    </div>
  );
}

export default App;
