import React, { useState } from 'react';
import styles from './AvatarSelector.module.css';

const AvatarSelector = ({ onSelect }) => {
  const avatars = [
    "https://i.pinimg.com/564x/8c/f1/9b/8cf19b09a82c525df6d8fbc5e2ac1491.jpg",
    "https://i.pinimg.com/736x/79/1d/eb/791deb1653f8bacd9d2f969754a4b047.jpg",
    "https://i.pinimg.com/236x/2e/55/77/2e5577460624b67a519a916171faf5ec.jpg",
    "https://i.pinimg.com/236x/a5/de/9d/a5de9db4445e577ffb4aa09c3d73dc09.jpg",
    "https://i.pinimg.com/736x/79/1d/eb/791deb1653f8bacd9d2f969754a4b047.jpg",
    "https://i.pinimg.com/236x/2e/55/77/2e5577460624b67a519a916171faf5ec.jpg",
    "https://i.pinimg.com/236x/a5/de/9d/a5de9db4445e577ffb4aa09c3d73dc09.jpg",
    "https://i.pinimg.com/736x/79/1d/eb/791deb1653f8bacd9d2f969754a4b047.jpg",
    "https://i.pinimg.com/236x/2e/55/77/2e5577460624b67a519a916171faf5ec.jpg",
    "https://i.pinimg.com/236x/a5/de/9d/a5de9db4445e577ffb4aa09c3d73dc09.jpg",
    "https://i.pinimg.com/236x/8e/9e/bc/8e9ebc0f3ce1edb1f126f33a2c360c70.jpg"
  ];

  return (
    <div className={styles.avatarModal}>
    <div className={styles.modalHeader}>
      <h2 className={styles.modalTitle}>Escolha seu avatar!</h2>
      <button className={styles.modalClose} onClick={onSelect}>X</button>
    </div>
    <div className={styles.avatarGrid}>
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className={styles.avatarItem}
          onClick={() => onSelect(avatar)}
        >
          <img src={avatar} alt={`Avatar ${index}`} />
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
