import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; 

export default function Success() {
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
        <Link href="/" legacyBehavior>
          <span className={styles.button}>HOME</span>
        </Link>
        <Link href="/profile" legacyBehavior>
          <span className={styles.button}>ACESSAR MEU PERFIL</span>
        </Link>
      </div>
    </div>
  );
}
