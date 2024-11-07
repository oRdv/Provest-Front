import styles from './page.module.css';

export default function detalheProf() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/img/snoopy.jfif" alt="Imagem do Snoopy" className={styles.image} />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>Snoopy Dog</h1>
        <p className={styles.description}>
          Sou professora de história a 4 anos, sou de SP e tenho 25 anos. Bem-vindo ao ProVest, a plataforma inovadora projetada para transformar a maneira como estudantes e professores se organizam e gerenciam o estudo para vestibulares e exames! Nossa missão é simplificar o processo de preparação, oferecendo ferramentas eficazes e suporte personalizado para garantir que cada aluno atinja seu máximo potencial.
        </p>
        <div className={styles.boxContainer}>
          <div className={styles.box}>Horários Disponíveis</div>
          <div className={styles.box}>Dias Disponíveis</div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Contatar</button>
          <button className={styles.button}>Videoaulas</button>
          <button className={styles.button}>Atividades</button>
        </div>
      </div>
    </div>
  );
}
