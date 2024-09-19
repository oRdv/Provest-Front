"use client";  // Adicione esta linha no início do arquivo

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import imagem from '../../public/img/female.png';
import Link from 'next/link';

function Login() {

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>ProVest</h1>
        <div className={styles.illustration}>
          <Image
            src={imagem}
            width={360}
            height={300}
            alt="Desenho de uma mulher pensando"
          />
        </div>
      </div>

      <div className={styles.rightSide}>
        <p className={styles.message}>
          OLÁ, ESTAMOS MUITO FELIZES POR TE VER POR AQUI!
        </p>

        <div className={styles.buttonsContainer}>
          <Link href="./loginAluno" className={styles.button}>SOU ALUNO</Link>
          <Link href="./loginProfessor" className={styles.button}>SOU PROFESSOR</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
