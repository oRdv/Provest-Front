'use client'
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './page.module.css';
import AvatarSelector from '@/components/ui/AvatarSelector';

const ProfileProfPage = () => {
  const [profile, setProfile] = useState({
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
      <div className={styles["header"]}>
        <div className={styles["avatar-preview"]} onClick={() => setIsModalOpen(true)}>
          {avatar ? (
            <img src={avatar} alt="Avatar" />
          ) : (
            <div></div>
          )}
        </div>
        <h1 className={styles["profile-name"]}>TAMARA SILVA</h1>
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
            onChange={handleChange}
          />
        </div>
        <div className={styles["form-group"]}>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Telefone"
            value={profile.phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles["form-group"]}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={profile.email}
            onChange={handleChange}
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
        <button type="submit" className={styles["save-button"]}>SALVAR</button>
      </form>
    </div>
  );
};

export default ProfileProfPage;
