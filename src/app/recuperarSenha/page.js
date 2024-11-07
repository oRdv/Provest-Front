'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

function Recuperar() {
  const [formData, setFormData] = useState({
    email: '',
    confirmEmail: '',
    senha: '',
    confirmSenha: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const userResponse = await fetch('https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/alunos');
      const usersData = await userResponse.json();

      const user = usersData.alunos.find((aluno) => aluno.email === formData.email);

      if (!user) {
        setError('Usuário não encontrado.');
        return;
      }

      const updateResponse = await fetch(`https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/aluno/senha/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          senha: formData.senha,
        }),
      });

      const updateData = await updateResponse.json();

      if (updateResponse.ok) {
        setSuccess('Senha atualizada com sucesso!');
      } else {
        setError(updateData.message || 'Erro ao atualizar a senha.');
      }
    } catch (err) {
      setError('Erro na solicitação.');
    }
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
          <h1>RECUPERAÇÃO DE SENHA</h1>
        </div>

        <div className={styles['login-form']}>
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
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleInputChange}
                required
              />
            </div>

            {error && <p className={styles.error}>{error}</p>}
            {success && <p className={styles.success}>{success}</p>}

            <div className={styles['button-container']}>
              <button type="submit" className={styles['btn-login']}>
                CONCLUÍDO
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Recuperar;
