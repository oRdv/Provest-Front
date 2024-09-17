import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import imagem from '../../../public/img/female.png';

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles['left-side']}>
        <div className={styles.provest}>
          <h1>ProVest</h1>
        </div>
        <div className={styles.illustration}>
          <Image
            src={imagem}
            width={360}
            height={300}
            alt="Desenho de uma mulher pensando"
          />
        </div>
      </div>

      <div className={styles['right-side']}>
        <div className={styles.welcome}>
          <h1>BEM VINDO ALUNO!</h1>
        </div>

        <div className={styles['login-form']}>
          <h1>Sign Up</h1>
          <form>
            <div className={styles['form-group']}>
              <label htmlFor="name">Nome completo</label>
              <input type="text" id="name" />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" placeholder="Sua senha" />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="phone">Telefone</label>
              <input type="tel" id="phone" />
            </div>

            <button type="submit" className={styles['btn-login']}>
              SIGN UP
            </button>
          </form>
        </div>

        <div className={styles['forgot-password']}>
          <a href="#">Esqueceu a senha?</a>
          <label className={styles['custom-checkbox']}>
            <input type="checkbox" />
            <span className={styles['checkmark']}></span>
            <span className={styles['label-text']}>Lembrar de mim</span>
          </label>
        </div>

        <hr className={styles['custom-horizontal-line']} />
      </div>
    </div>
  );
}

export default Login;
