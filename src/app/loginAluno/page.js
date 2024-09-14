import React from 'react';
import styles from '../loginAluno/page.module.css';

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles['left-side']}>
        <div className={styles.provest}>
          <h1>ProVest</h1>
        </div>
        <div className={styles.illustration}>
          {/* Place your photo here */}
        </div>
      </div>
      <div className={styles['right-side']}>
        <div className={styles.welcome}>
          <h1>BEM VINDO ALUNO!</h1>
        </div>
        <div className={styles['login-form']}>
          <h1>Login</h1>
          <form>
            <div className={styles['form-group']}>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="Seu e-mail" />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" placeholder="Sua senha" />
            </div>
            <button type="submit" className={styles['btn-login']}>
              LOGIN
            </button>
          </form>
        </div>
        <div className={styles['forgot-password']}>
          <a href="#">Esqueceu a senha?</a>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Lembrar de mim</label>
        </div>
        <div className={styles['create-account']}>
          <a href="#">Não possui cadastro?</a>
          <a href="#">Criar conta</a>
        </div>
      </div>
    </div>
  );
}


export default Login;