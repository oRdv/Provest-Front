import React from 'react';
import styles from './AvatarSelector.module.css';

const AvatarSelector = ({ onSelect, icons }) => {
  return (
    <div className={styles.avatarModal}>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Escolha seu avatar!</h2>
        <button className={styles.modalClose} onClick={() => onSelect(null)}>X</button>
      </div>
      <div className={styles.avatarGrid}>
        {icons.map((avatar, index) => (
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
