"use client"; 
import Image from 'next/image';
import styles from './page.module.css';
import React, { useState } from 'react';
import Link from 'next/link';

const baseUrl = 'https://jengt-provest-backend.onrender.com/v1/jengt_provest/login'; // Altere para o endpoint de login correto

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

  const [erros, setErros] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!formData.email || !formData.senha) {
      setErros({ msg: "Por favor, preencha todos os campos." });
      return;
    }
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
  
    try {
      const response = await fetch(baseUrl, options);
  
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
  
      const data = await response.json();
      localStorage.setItem('userId', data.id);
      window.location.href = '/home';  // Redireciona após login bem-sucedido
  
    } catch (error) {
      console.error("Erro:", error);
      setErros({ msg: "Falha no login. Verifique suas credenciais." });
    }
  };
  

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

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
          <h1>BEM VINDO ALUNO!</h1>
        </div>

        <div className={styles['login-form']}>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles['form-group']}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="senha">Senha</label>
              <input
                type={showPassword ? "text" : "password"}
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleInputChange}
                required
              />
              <button type="button" onClick={togglePassword}>
                {showPassword ? "Ocultar" : "Mostrar"} Senha
              </button>
            </div>

            {erros.msg && <p className={styles.error}>{erros.msg}</p>}

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
          <Link href="/criar-conta">Criar conta</Link>
        </div>

        <hr className="horizontal-line" />
      </div>
    </div>
  );
}

export default Login;
