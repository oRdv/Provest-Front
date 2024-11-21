'use client';
import styles from './page.module.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Ícones de olho
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SignupProfessor = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    curso_id: '', // Curso selecionado
    icone_id: 3,  // Ícone fixo conforme solicitado
  });
  const [cursos, setCursos] = useState([]);
  const [alert, setAlert] = useState({ open: false, msg: '', severity: '' }); // Estado do alerta
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await fetch('https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/cursos/disciplinas');
        if (!response.ok) {
          throw new Error('Erro ao buscar cursos');
        }
        const data = await response.json();
        setCursos(data.curso_disciplina || []);
      } catch (error) {
        setAlert({ open: true, msg: 'Erro ao carregar cursos. Tente novamente mais tarde.', severity: 'error' });
      }
    };

    fetchCursos();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCursoChange = (e) => {
    setFormData({ ...formData, curso_id: e.target.value });
  };

  const handleCloseSnackbar = () => {
    setAlert({ ...alert, open: false });
  };

  const signupProfessor = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/prof', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          senha: formData.senha,
          curso_id: formData.curso_id,  // Envia o curso selecionado
          icone_id: formData.icone_id   // Ícone fixo
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        setAlert({ open: true, msg: 'Cadastro de professor realizado com sucesso!', severity: 'success' });
        // Salve todos os dados retornados da API no localStorage
        const userProfile = {
          name: formData.nome,
          email: formData.email,
          materia: data.materia, // Supondo que "materia" seja retornada pela API
          horarios: data.horarios, // Supondo que "horarios" seja retornada pela API
          avatar: formData.icone_id,
        };
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        setTimeout(() => {
          router.push('/loginProfessor');
        }, 2000); 
      } else {
        const errorData = await response.json();
        setAlert({ open: true, msg: errorData.message || 'Erro ao realizar o cadastro.', severity: 'error' });
      }
    } catch (error) {
      setAlert({ open: true, msg: 'Ocorreu um erro na solicitação. Tente novamente mais tarde.', severity: 'error' });
    }
  };
  

  return (
    <div className={styles['right-side']}>
      <div className={styles.welcome}>
        <h1>CADASTRO DE PROFESSOR</h1>
      </div>

      <div className={styles['login-form']}>
        <h1>Sign Up</h1>
        <form onSubmit={signupProfessor}>
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
                  {curso.curso}
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

      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Define o topo central
      >
        <Alert onClose={handleCloseSnackbar} severity={alert.severity} sx={{ width: '100%' }}>
          {alert.msg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SignupProfessor;
