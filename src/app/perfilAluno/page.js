'use client'
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './page.module.css';
import AvatarSelector from '@/components/ui/AvatarSelector';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    photo: '',
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const [avatar, setAvatar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement('#modal-root');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Perfil salvo:', profile);
  };

  const handleAvatarSelect = (selectedAvatar) => {
    setAvatar(selectedAvatar);
    setIsModalOpen(false);
  };

  return (
    <div className={styles["profile-page"]}>
      <div className={styles["top-banner"]} />
      <div className={styles["header"]}>
        <h1>NYCOLLE LIMA</h1>
        <div className={styles["avatar-preview"]}>
        {avatar ? (
          <img src={avatar} alt="Avatar" />
        ) : (
          'Escolha um avatar'
        )}
      </div>
      <button onClick={() => setIsModalOpen(true)}>Escolher Avatar</button>

      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} contentLabel="Select Avatar">
        <AvatarSelector onSelect={handleAvatarSelect} />
      </Modal>
    </div>

      <form className={styles["profile-form"]} onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="phone">Telefone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
          />
        </div>
      </form>
      <span className={styles.button}>SALVAR</span>

    </div>
  );
};

export default ProfilePage;
