'use client';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import AvatarSelector from '@/components/ui/AvatarSelector';
import styles from './page.module.css';

const TeacherProfilePage = () => {
  const [profile, setProfile] = useState({
    name: '',
    subject: '',
    availableHours: '',
    availableDays: '',
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
    <div className={styles['profile-page']}>
      <div className={styles['top-banner']}>
        <div className={styles['avatar-container']}>
          {avatar ? (
            <img src={avatar} alt="Avatar" className={styles['avatar-img']} />
          ) : (
            <div className={styles['placeholder-avatar']}>Insira um nome ou uma foto de perfil</div>
          )}
          <button className={styles['avatar-button']} onClick={() => setIsModalOpen(true)}>
            <img src="/camera-icon.png" alt="Select Avatar" />
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className={styles.modal}
        contentLabel="Select Avatar"
      >
        <AvatarSelector onSelect={handleAvatarSelect} />
      </Modal>

      <form className={styles['profile-form']} onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="subject">Matéria que atua</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={profile.subject}
            onChange={handleChange}
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="availableHours">Horários disponíveis</label>
          <input
            type="text"
            id="availableHours"
            name="availableHours"
            value={profile.availableHours}
            onChange={handleChange}
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="availableDays">Dias disponíveis</label>
          <input
            type="text"
            id="availableDays"
            name="availableDays"
            value={profile.availableDays}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.button}>SALVAR</button>
      </form>
    </div>
  );
};

export default TeacherProfilePage;
