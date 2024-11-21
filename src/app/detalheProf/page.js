import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function detalheProf() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/img/snoopy.jfif" alt="Imagem do Snoopy" className={styles.image} />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>Snoopy Dog</h1>
        

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
    <img src="/img/constate.png" alt="1" className={styles.icon} /> 
    <Link href="./chatGeral">Contatar</Link>
  </button>
  <button className={styles.button}>
    <img src="/img/aula.png" alt="2" className={styles.icon} /> 
    <Link href="./videoaula">Videoaulas</Link>
  </button>
  <button className={styles.button}>
    <img src="/img/Vector.png" alt="3" className={styles.icon} /> 
    <Link href="./chatGeral">Atividades</Link>
  </button>
</div>

      </div>
    </div>
  );
}
