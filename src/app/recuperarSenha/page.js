'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Ícones de olho
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import styles from './page.module.css';

function Recuperar() {
  const [formData, setFormData] = useState({
    email: '',
    confirmEmail: '',
    senha: '',
    confirmSenha: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      setError('Os e-mails não coincidem.');
      setSuccess('');
      setOpenSnackbar(true);
      return;
    }

    if (formData.senha !== formData.confirmSenha) {
      setError('As senhas não coincidem.');
      setSuccess('');
      setOpenSnackbar(true);
      return;
    }

    try {
      // Buscar aluno pelo email
      const userResponse = await fetch(
        'https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/alunos'
      );
      const usersData = await userResponse.json();

      const user = usersData.alunos.find(
        (aluno) => aluno.email === formData.email
      );

      if (!user) {
        setError('Usuário não encontrado.');
        setSuccess('');
        setOpenSnackbar(true);
        return;
      }

      // Atualizar senha usando o ID
      const updateResponse = await fetch(
        `https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/aluno/senha/${user.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            senha: formData.senha,
          }),
        }
      );

      if (updateResponse.ok) {
        setError('');
        setSuccess('Senha atualizada com sucesso!');
        setOpenSnackbar(true);
        // Redirecionar para a página "concluído"
        setTimeout(() => {
          window.location.href = '/concluido';
        }, 2000);
      } else {
        const updateData = await updateResponse.json();
        setError(updateData.message || 'Erro ao atualizar a senha.');
        setSuccess('');
        setOpenSnackbar(true);
      }
    } catch (err) {
      setError('Erro na solicitação.');
      setSuccess('');
      setOpenSnackbar(true);
    }
  };

  return (
    <div className={styles.container}>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={error ? 'error' : 'success'}
          sx={{ width: '100%' }}
        >
          {error || success}
        </Alert>
      </Snackbar>

      <div className={styles['left-side']}>
        <div className={styles.provest}>
          <h1>ProVest</h1>
        </div>
        <div className={styles.illustration}>
          <Image
            src="/img/female.png"
            width={360}
            height={300}
            alt=""
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
                placeholder=""
              />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="confirmEmail">Confirmar E-mail</label>
              <input
                type="email"
                id="confirmEmail"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleInputChange}
                required
                placeholder=""
              />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="senha">Senha</label>
              <div className={styles['input-container']}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="senha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  required
                  placeholder=""
                />
                <span
                  className={styles['password-icon']}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="confirmSenha">Confirmar Senha</label>
              <div className={styles['input-container']}>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmSenha"
                  name="confirmSenha"
                  value={formData.confirmSenha}
                  onChange={handleInputChange}
                  required
                  placeholder=""
                />
                <span
                  className={styles['password-icon']}
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>
            </div>

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
