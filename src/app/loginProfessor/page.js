import Image from 'next/image';
import styles from './page.module.css';

function Login() {
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
          <h1>BEM VINDO PROFESSOR!</h1>
        </div>

        <div className={styles['login-form']}>
          <h1>Login</h1>
          <form>
            <div className={styles['form-group']}>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" />
            </div>

            <div className={styles['button-container']}>
              <button type="submit" className={styles['btn-login']}>
                LOGIN
              </button>
            </div>
          </form>
        </div>

        <div className={styles['forgot-password']}>
          <a href="#">Esqueceu a senha?</a>
          <label className={styles['custom-checkbox']}>
            <input type="checkbox" id="remember-me" />
            <span className={styles['checkmark']}></span>
            <span className={styles['label-text']}>Lembrar de mim</span>
          </label>
        </div>

        <div className={styles['create-account']}>
          <a href="#">Não possui cadastro?</a>
          <a href="#">Criar conta</a>
        </div>

        <hr className="horizontal-line" />
      </div>
    </div>
  );
}

export default Login;
