import styles from './page.module.css';

export default function Questoes() {
  return (
    <div>
      <header className={styles.header}>
        Matematica
      </header>
      <div className={styles.content}>
        <div className={styles.intro}>
          Na Matemática, os conjuntos representam a reunião de diversos objetos e as operações realizadas com os conjuntos são: união, intersecção e diferença. Aproveite as 10 questões a seguir para testar seus conhecimentos. Utilize as resoluções comentadas para tirar as suas dúvidas.
        </div>

        <div className={styles.title}>
            Questão 1
        </div>
        <div className={styles.question}>          
          <p>Considere os conjuntos</p>
          <p>A = {1, 4, 7}</p>
          <p>B = {1, 3, 4, 5, 7, 8}</p>
          <p>É correto afirmar que:</p>
        </div>
        <div className={styles.options}>
          <p>a) A ⊂ B</p>
          <p>b) A ⊃ B</p>
          <p>c) B ⊂ A</p>
          <p>d) B ⊃ A</p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Ver resposta correta</button>
        </div>
      </div>
    </div>
  );
}
