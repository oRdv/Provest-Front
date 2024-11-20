'use client';

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './page.module.css';
import AvatarSelector from '@/components/ui/AvatarSelector';

const ProfileProfPage = () => {
  const [profile, setProfile] = useState({
    name: '',
    materia: '',
    horarios: '',
    email: '',
    password: '',
  });

  const [avatar, setAvatar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement('#modal-root');

    // Carregar os dados do professor do localStorage
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (userProfile) {
      setProfile({
        name: userProfile.name,
        materia: userProfile.materia,
        horarios: userProfile.horarios,
        email: userProfile.email,
        password: '', // Senha deixada em branco para ser editada
      });
      setAvatar(userProfile.avatar || '/default-avatar.png'); // Avatar padrão
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('Usuário não identificado.');
      return;
    }

    try {
      const response = await fetch(`/v1/jengt_provest/prof/senha/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ senha: profile.password }),
      });

      if (response.ok) {
        alert('Senha atualizada com sucesso!');
        setProfile({ ...profile, password: '' });
      } else {
        const errorData = await response.json();
        alert(`Erro ao atualizar senha: ${errorData.message || 'Tente novamente mais tarde.'}`);
      }
    } catch (error) {
      console.error('Erro ao atualizar senha:', error);
      alert('Erro inesperado. Verifique sua conexão e tente novamente.');
    }

    // Atualiza o perfil no localStorage
    const updatedProfile = { ...profile, avatar };
    localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
  };

  const handleAvatarSelect = (selectedAvatar) => {
    setAvatar(selectedAvatar);
    setIsModalOpen(false);
  };

  return (
    <div className={styles["profile-page"]}>
      <div className={styles["header"]}>
        <div className={styles["avatar-preview"]} onClick={() => setIsModalOpen(true)}>
          {avatar ? (
            <img src={avatar} alt="Avatar" />
          ) : (
            <div></div>
          )}
        </div>
        <h1 className={styles["profile-name"]}>{profile.name || 'Nome do Professor'}</h1>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className={styles.modal}
        contentLabel="Select Avatar"
      >
        <AvatarSelector onSelect={handleAvatarSelect} />
      </Modal>

      <form className={styles["profile-form"]} onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome"
            value={profile.name}
            readOnly
          />
        </div>
        <div className={styles["form-group"]}>
          <input
            type="text"
            id="materia"
            name="materia"
            placeholder="Matéria"
            value={profile.materia}
            readOnly
          />
        </div>
        <div className={styles["form-group"]}>
          <input
            type="text"
            id="horarios"
            name="horarios"
            placeholder="Horários"
            value={profile.horarios}
            readOnly
          />
        </div>
        <div className={styles["form-group"]}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={profile.email}
            readOnly
          />
        </div>
        <div className={styles["form-group"]}>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Mudar senha"
            value={profile.password}
            onChange={handleChange}
          />
        </div>

        <div className={styles["form-group"]}>
          <button type="submit" className={styles["btn-save"]}>
            Salvar alterações
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileProfPage;
