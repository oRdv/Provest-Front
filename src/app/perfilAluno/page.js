'use client';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Link from 'next/link';
import styles from './page.module.css';
import AvatarSelector, { ProfileIcon } from '@/components/ui/AvatarSelector';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Ícones de olho

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: '',
    curso: '',
    email: '',
    password: '',
  });

  const [avatar, setAvatar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [icons, setIcons] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    Modal.setAppElement('#modal-root');

    // Carregar os ícones da API
    const fetchIcons = async () => {
      try {
        const response = await fetch(
          'https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/icones'
        );
        const data = await response.json();

        if (response.ok && Array.isArray(data.icones)) {
          setIcons(data.icones);
          const defaultAvatar = data.icones.find((icon) => icon.id === 3);
          setAvatar(defaultAvatar?.url || '/default-avatar3.png');
        } else {
          console.error('Erro ao buscar os ícones.');
        }
      } catch (error) {
        console.error('Erro ao buscar os ícones:', error);
      }
    };

    fetchIcons();

    // Carregar os dados do usuário do localStorage
    const userData = JSON.parse(localStorage.getItem('userProfile'));
    if (userData) {
      setProfile({
        name: userData.name,
        curso: userData.curso || 'Curso não informado',
        email: userData.email,
        password: '',
      });

      setAvatar(userData.avatar || '/default-avatar3.png');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Verifica se a senha foi preenchida
    if (!profile.password) {
      alert('Por favor, insira uma nova senha.');
      return;
    }
  
    // Obtém o ID do usuário do localStorage
    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('Usuário não identificado.');
      return;
    }
  
    try {
      // Envia a requisição PATCH para o backend com o ID e a senha
      const response = await fetch(
        `https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/aluno/senha/${userId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ senha: profile.password }), // Apenas senha e ID
        }
      );
  
      // Verifica a resposta do servidor
      if (response.ok) {
        alert('Senha atualizada com sucesso!');
        setProfile({ ...profile, password: '' }); // Limpa o campo de senha após sucesso
      } else {
        // Se a resposta não for ok, tenta capturar a resposta de erro
        const errorData = await response.text(); // Use text() para capturar a resposta em HTML
        console.error('Erro ao atualizar senha:', errorData);
        alert(`Erro ao atualizar senha: ${errorData}`);
      }
    } catch (error) {
      console.error('Erro ao atualizar senha:', error);
      alert('Erro inesperado. Verifique sua conexão e tente novamente.');
    }
  
    // Atualiza o perfil no localStorage, se necessário
    const updatedProfile = { ...profile, avatar };
    localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
  };

  const handleAvatarSelect = (selectedAvatar) => {
    setAvatar(selectedAvatar);
    setIsModalOpen(false);
  };

  return (
    <div className={styles['profile-page']}>
      <div className={styles['header']}>
        <div
          className={styles['avatar-preview']}
          onClick={() => setIsModalOpen(true)}
        >
          <ProfileIcon avatar={avatar} />
        </div>
        <h1 className={styles['profile-name']}>
          {profile.name || 'Nome do usuário'}
        </h1>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className={styles.modal}
        contentLabel="Select Avatar"
      >
        <AvatarSelector onSelect={handleAvatarSelect} icons={icons} />
      </Modal>

      <form className={styles['profile-form']} onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome"
            value={profile.name}
            readOnly
          />
        </div>
        <div className={styles['form-group']}>
          <input
            type="text"
            id="curso"
            name="curso"
            placeholder="Curso"
            value={profile.curso}
            readOnly
          />
        </div>
        <div className={styles['form-group']}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={profile.email}
            readOnly
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="senha">Senha</label>
          <div className={styles['input-container']}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="senha"
              name="password" // O nome deve ser "password" para corresponder ao estado
              value={profile.password} // Use o estado correto
              onChange={handleChange} // Use a função de manipulação já criada
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
        <button type="submit" className={styles['save-button']}>
          SALVAR
        </button>

        <div className={styles.buttons}>
        <Link href="/home" legacyBehavior>
          <span className={styles.button}>HOME</span>
        </Link>
      </div>

      </form>
    </div>
  );
};

export default ProfilePage;
