'use client';
import styles from './page.module.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
  const [erros, setErros] = useState({ msg: '' });

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await fetch('https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/cursos');
        if (!response.ok) throw new Error('Erro ao buscar cursos');
        const data = await response.json();
        setCursos(data.curso || []);
      } catch (error) {
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
    setFormData({ ...formData, curso_id: e.target.value });
  };

  const signupUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/aluno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        router.push('/loginAluno'); // Redireciona para a página de login
      } else {
        const errorData = await response.json();
        setErros({ msg: errorData.message || 'Erro ao realizar o cadastro.' });
      }
    } catch (error) {
      setErros({ msg: 'Ocorreu um erro na solicitação. Tente novamente mais tarde.' });
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
              type="password"
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

          {erros.msg && <p className={styles.error}>{erros.msg}</p>}

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
