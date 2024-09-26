import Image from 'next/image';
import styles from './page.module.css';

function Recuperar() {
  return (
    <div className={styles.container}>

      <div className={styles['left-side']}>
        <div className={styles.provest}>
          <h1>ProVest</h1>
        </div>
        <div className={styles.illustration}>
          <Image
            src="/img/female.png"
            width={360}
            height={300}
            alt="Desenho de uma mulher pensando"
          />
        </div>
      </div>

      <div className={styles['right-side']}>
        <div className={styles.welcome}>
          <h1>RECUPERAÇÃO DE SENHA</h1>
        </div>

        <div className={styles['login-form']}>
          <form>
            <div className={styles['form-group']}>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="email">Confirme seu E-mail</label>
              <input type="email" id="email" />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="email">Senha</label>
              <input type="email" id="email" />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="password">Confirme sua enha</label>
              <input type="password" id="password" />
            </div>

            <div className={styles['button-container']}>
              <button type="submit" className={styles['btn-login']}>
                CONCLUÍDO
              </button>
            </div>
          </form>
        </div>

        <hr className="horizontal-line" />
      </div>
    </div>
  );
}

export default Recuperar;
