"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    photo: '',
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Perfil salvo:', profile);
  };

  return (
    <div className={styles["profile-page"]}>
      <div className={styles["top-banner"]} />
      <div className={styles["header"]}>
        <h1>NYCOLLE LIMA</h1>
      </div>
      <form className={styles["profile-form"]} onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="photo">Foto de Perfil</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={(e) => setProfile({ ...profile, photo: URL.createObjectURL(e.target.files[0]) })}
          />
        </div>
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
        <button type="submit" className={styles["save-button"]}>Salvar</button>
      </form>
    </div>
  );
};

export default ProfilePage;
