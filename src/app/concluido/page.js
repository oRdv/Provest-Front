import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; 

export default function Success() {
  return (
    <div className={styles.container}>
      <Image
        src="/path/to/your/image.jpg" 
        width={300} 
        height={300} 
        className={styles.image}
      />
      <p className={styles.text}>Cadastro Concluído com Sucesso!</p>
      <div className={styles.buttons}>
        <Link href="/" legacyBehavior>
          <span className={styles.button}>Home</span>
        </Link>
        <Link href="/profile" legacyBehavior>
          <span className={styles.button}>Acessar Meu Perfil</span>
        </Link>
      </div>
    </div>
  );
}
