'use client';
import styles from './page.module.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SignupProfessor = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    curso_id: '',
  });
  const [cursos, setCursos] = useState([]);
  const [erros, setErros] = useState({ msg: '' });
  const [showModal, setShowModal] = useState(false); // Controle do modal

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
        setErros({ msg: 'Erro ao carregar cursos. Tente novamente mais tarde.' });
        setShowModal(true);
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

  const signupProfessor = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/profs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          senha: formData.senha,
          disciplinas: [],
        }),
      });

      if (response.ok) {
        alert('Cadastro de professor realizado com sucesso!');
        router.push('/loginProfessor');
      } else {
        const errorData = await response.json();
        setErros({ msg: errorData.message || 'Erro ao realizar o cadastro.' });
        setShowModal(true);
      }
    } catch (error) {
      setErros({ msg: 'Ocorreu um erro na solicitação. Tente novamente mais tarde.' });
      setShowModal(true);
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
              className={styles['curso-select']} // Novo estilo para o input de curso
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

      <div className={styles['create-account']}>
        <a href="./loginProfessor">Já possui uma conta? Faça login</a>
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles['modal-content']}>
            <p>{erros.msg}</p>
            <button onClick={() => setShowModal(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupProfessor;
