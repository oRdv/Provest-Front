'use client'
import styles from './page.module.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    curso_id: '',
    icone_id: 1
  });
  const [cursos, setCursos] = useState([]);
  const [erros, setErros] = useState({ msg: '' });

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await fetch('https://jengt-provest-backend.onrender.com/v1/jengt_provest/cursos');
        if (!response.ok) {
          throw new Error('Erro ao buscar cursos');
        }
        const data = await response.json();
        console.log("Cursos carregados:", data);
        setCursos(data.curso || []);
      } catch (error) {
        console.error('Erro ao buscar cursos:', error);
        setErros({ msg: 'Erro ao carregar cursos. Tente novamente mais tarde.' });
      }
    };

    fetchCursos();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCursoChange = (e) => {
    const selectedCursoId = cursos.find(curso => curso.nome === e.target.value)?.id || '';
    setFormData({ ...formData, curso_id: selectedCursoId });
  };

  const signupUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://jengt-provest-backend.onrender.com/v1/jengt_provest/aluno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          senha: formData.senha,
          curso_id: Number(formData.curso_id),
          icone_id: Number(formData.icone_id)
        })
      });

      if (response.ok) {
        
      } else {
        const errorData = await response.json();
        console.log(errorData.message || 'Erro ao realizar o cadastro.');
      }
    } catch (error) {
      // console.log('Ocorreu um erro na solicitação. Tente novamente mais tarde.', error );
    }
  };

  return (
    <div className={styles['right-side']}>
      <div className={styles.welcome}>
        <h1>CADASTRO DE ALUNO</h1>
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
              type='password'
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="curso_id">Curso</label>
            <select
              id="curso_id"
              name="curso_id"
              value={cursos.find(curso => curso.id === formData.curso_id)?.nome || ''}
              onChange={handleCursoChange}
              required
            >
              <option value="">Selecione um curso</option>
              {cursos.map(curso => (
                <option key={curso.id} value={curso.nome}>{curso.nome}</option>
              ))}
            </select>
          </div>

          {erros.msg && <p className={styles.error}>{erros.msg}</p>}

          <div className={styles['button-container']}>
            <Link href="/loginAluno">
              <button type="button" className={styles['btn-login']}>
                Sign Up
              </button>
            </Link>
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
