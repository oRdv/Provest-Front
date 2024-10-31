import React, { useState, useEffect } from 'react';
import styles from './AvatarSelector.module.css';

const AvatarSelector = ({ onSelect }) => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await fetch('https://jengt-provest-backend-1.onrender.com/v1/jengt_provest/icones');
        const data = await response.json();

        if (response.ok && Array.isArray(data.icones)) {
          setAvatars(data.icones);
        } else {
          console.error('Erro ao buscar os ícones.');
        }
      } catch (error) {
        console.error('Erro ao buscar os ícones:', error);
      }
    };

    fetchAvatars();
  }, []);

  return (
    <div className={styles.avatarModal}>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Escolha seu avatar!</h2>
        <button className={styles.modalClose} onClick={() => onSelect(null)}>X</button>
      </div>
      <div className={styles.avatarGrid}>
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className={styles.avatarItem}
            onClick={() => onSelect(avatar.url)}
          >
            <img src={avatar.url} alt={`Avatar ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProfileIcon = ({ avatar }) => (
<div className={styles.profileAvatar}>
  <img src={avatar} alt="Avatar de perfil" />
</div>
);

export default AvatarSelector;
export { ProfileIcon };
