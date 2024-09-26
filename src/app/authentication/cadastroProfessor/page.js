"use client"; 

import styles from './page.module.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    icone_id: 1

  });
  const [erros, setErros] = useState({ msg: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const signupUser = async (e) => {
      e.preventDefault();

    try {
        console.log({
            nome: formData.nome,
            email: formData.email,
            senha: formData.senha,
            icone_id: formData.icone_id
           
        });
      const response = await fetch('https://jengt-provest-backend.onrender.com/v1/jengt_provest/prof', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
            nome: formData.nome,
            email: formData.email,
            senha: formData.senha,
            icone_id: formData.icone_id
           
        })
      });


      if (response.ok) {
        router.push('/login');
      } else {
        const errorData = await response.json();
        setErros({ msg: errorData.message || 'Erro ao realizar o cadastro.' });
      }
    } catch (error) {
      setErros({ msg: 'Ocorreu um erro na solicitação. Tente novamente mais tarde.', error });
    }
  };

  return (
    <div className={styles['right-side']}>
      <div className={styles.welcome}>
        <h1>CADASTRO DE PROFESSOR</h1>
      </div>

      <div className={styles['login-form']}>
        <h1>Sign Up</h1>
        <form onSubmit={signupUser}>
          <div className={styles['form-group']}>
            <label htmlFor="nome">Nome completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              required
            />
          </div>

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
              type='number'
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleInputChange}
              required
            />
          </div>

          {erros.msg && <p className={styles.error}>{erros.msg}</p>}

          <div className={styles['button-container']}>
            <button type="submit" className={styles['btn-login']}>
              SIGN UP
            </button>
          </div>
        </form>
      </div>

      <div className={styles['create-account']}>
        <a href="/login">Já possui uma conta? Faça login</a>
      </div>
    </div>
  );
};

export default Signup;
