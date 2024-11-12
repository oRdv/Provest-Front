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

        <div className={styles.subjectContainer}>
          <div className={styles.subjectBox}>História</div>
          <div className={styles.subjectBox}>Geografia</div>
        </div>


        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <label htmlFor="horarios">Horários Disponíveis</label>
            <input type="text" id="horarios" name="horarios" className={styles.inputField} placeholder="Ex: 08:00 - 12:00" />
          </div>
          <div className={styles.box}>
            <label htmlFor="dias">Dias Disponíveis</label>
            <input type="text" id="dias" name="dias" className={styles.inputField} placeholder="Ex: Segunda a Sexta" />
          </div>
        </div>
      
        <div className={styles.buttonContainer}>
  <button className={styles.button}>
    <img src="/img/constate.png" alt="1" className={styles.icon} /> Contatar
  </button>
  <button className={styles.button}>
    <img src="/img/aula.png" alt="2" className={styles.icon} /> Videoaulas
  </button>
  <button className={styles.button}>
    <img src="/img/Vector.png" alt="3" className={styles.icon} /> Atividades
  </button>
</div>


      </div>
    </div>
  );
}
