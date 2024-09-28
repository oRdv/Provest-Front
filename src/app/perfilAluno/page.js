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
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Modal.setAppElement('#__next');
    }
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

  const handleIconClick = (icon) => {
    setAvatar(icon);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
      handleAvatarSelect(reader.result); // Seleciona a imagem enviada
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles["profile-page"]}>
      <div className={styles["top-banner"]} />
      <div className={styles["header"]}>
        <h1>NYCOLLE LIMA</h1>
        <div className={styles["avatar-preview"]}>
          {avatar ? (
            <img src={avatar} alt="Avatar" className={styles["avatar-image"]} />
          ) : (
            'Escolha um avatar'
          )}
        </div>
        <button onClick={() => setIsModalOpen(true)}>Escolher Avatar</button>
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

      {isModalOpen && (
        <Modal isOpen onRequestClose={() => setIsModalOpen(false)} contentLabel="Select Avatar" className="modal-content">
          <h2>Escolha um avatar</h2>
          <AvatarSelector icons={icons} onSelect={handleAvatarSelect} onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
};

export default ProfilePage;
