"use client";

import styles from './page.module.css';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: '', senha: '' });
    const [erros, setErros] = useState({ msg: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const loginValidation = async (e) => {
        e.preventDefault();
        const { email, senha } = formData;

        const getUsers = async () => {
            const url = 'https://jengt-provest-backend-1.onrender.com/v1/jengt_provest/alunos';
            try {
                const response = await fetch(url);
                const data = await response.json();
                return data;
            } catch (error) {
                alert('Houve um problema com a solicitação de login.');
                return [];
            }
        };

        const usuarios = await getUsers();
        let userStatus = false;

        if (usuarios && usuarios.alunos) {
            usuarios.alunos.forEach(user => {
                if (user.email === email && user.senha === senha) {
                    userStatus = true;
                    localStorage.setItem('userId', user.id);
                
                    router.push('/home');
                }
            });
        }

        if (!userStatus) {
            setErros({ msg: 'Credenciais inválidas. Tente novamente.' });
        }
    };

    return (
        <div className={styles['right-side']}>
            <div className={styles.welcome}>
                <h1>BEM VINDO ALUNO!</h1>
            </div>
    
            <div className={styles['login-form']}>
                <h1>Login</h1>
                <form onSubmit={loginValidation}>
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
                <p>Não possui cadastro?</p>
                <Link href="./cadastroAluno">Criar conta</Link>
            </div>
        </div>
    );
};

export default Login;
