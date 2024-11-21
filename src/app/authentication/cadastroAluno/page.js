'use client';
import styles from './page.module.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Ícones de olho

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    curso_id: '',
    icone_id: 1,
    status: 1,
  });
  
  const [cursos, setCursos] = useState([]);
  const [alert, setAlert] = useState({ open: false, msg: '', severity: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};

const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
};

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await fetch('https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/cursos');
        if (!response.ok) throw new Error('Erro ao buscar cursos');
        const data = await response.json();
        setCursos(data.curso || []);
      } catch (error) {
        showAlert('Erro ao carregar cursos. Tente novamente mais tarde.', 'error');
      }
    };

    fetchCursos();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCursoChange = (e) => {
    setFormData({ ...formData, curso_id: e.target.value });
  };

  const checkEmailExists = async (email) => {
    try {
      const response = await fetch('https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/alunos');
      if (!response.ok) throw new Error('Erro ao verificar emails existentes');
      const data = await response.json();
      return data.alunos.some((aluno) => aluno.email === email);
    } catch (error) {
      throw new Error('Erro ao verificar emails. Tente novamente mais tarde.');
    }
  };

  const signupUser = async (e) => {
    e.preventDefault();
    try {
      const emailExists = await checkEmailExists(formData.email);
      if (emailExists) {
        showAlert('O email já está cadastrado. Use outro email.', 'error');
        return;
      }

      const response = await fetch('https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/aluno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showAlert('Cadastro realizado com sucesso!', 'success');
        setTimeout(() => {
          router.push('/authentication/loginAluno');
        }, 2000);
      } else {
        const errorData = await response.json();
        showAlert(errorData.message || 'Erro ao realizar o cadastro.', 'error');
      }
    } catch (error) {
      showAlert('Ocorreu um erro na solicitação. Tente novamente mais tarde.', 'error');
    }
  };

  const showAlert = (msg, severity) => {
    setAlert({ open: true, msg, severity });
  };

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <div className={styles['right-side']}>
      <div className={styles.welcome}>
        <h1>CADASTRO DE ALUNO</h1>
      </div>

      <Snackbar
        open={alert.open}
        onClose={handleClose}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>
          {alert.msg}
        </Alert>
      </Snackbar>

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
              <div className={styles['input-container']}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="senha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  required
                  placeholder="Digite sua senha"
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
            <label htmlFor="curso_id">Curso</label>
            <select
              id="curso_id"
              name="curso_id"
              value={formData.curso_id}
              onChange={handleCursoChange}
              required
            >
              <option value="">Selecione um curso</option>
              {cursos.map((curso) => (
                <option key={curso.id} value={curso.id}>
                  {curso.nome}
                </option>
              ))}
            </select>
          </div>

          <div className={styles['button-container']}>
            <button type="submit" className={styles['btn-login']}>
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <div className={styles['create-account']}>
        <a href="./loginAluno">Já possui uma conta? Faça login</a>
      </div>
    </div>
  );
};

export default Signup;
