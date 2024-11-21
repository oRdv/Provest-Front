'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; 

export default function Success() {
  const [redirectTo, setRedirectTo] = useState('/home'); // valor padrão

  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    
    if (userProfile) {
      if (userProfile.role === 'aluno') {
        setRedirectTo('/perfilAluno');
      } else if (userProfile.role === 'professor') {
        setRedirectTo('/perfilCadastroProfessor');
      }
    }
  }, []); // O useEffect roda apenas uma vez após o componente ser montado

  return (
    <div className={styles.container}>
      <Image
        src="/img/image 9.png" 
        width={300} 
        height={300} 
        className={styles.image}
      />
      <p className={styles.text}>CADASTRO CONCLUÍDO COM SUCESSO!</p>
      <div className={styles.buttons}>
        <Link href="/home" legacyBehavior>
          <span className={styles.button}>HOME</span>
        </Link>
        <Link href={redirectTo} legacyBehavior>
          <span className={styles.button}>ACESSAR MEU PERFIL</span>
        </Link>
      </div>
    </div>
  );
}
