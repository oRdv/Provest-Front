import React, { useState } from 'react';
import './AvatarSelector.module.css';

const AvatarSelector = ({ icons, onSelect, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = (icon) => {
    onSelect(icon);
    setIsOpen(false); 
  };

  const icon = [
    '@/../public/img/gatinho.png',
    '@/../public/img/vaquinha.png',
    '@/../public/img/macaquinho.png',
   
  ];

  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleSelectAvatar = (index) => {
    setSelectedAvatar(index);
  };

  return (
   <div className="avatar-selector">
      <h3>Escolha um avatar</h3>
      <div className="avatars-grid">
        {icon.map((avatar, index) => (
          <div
            key={index}
            className={`avatar-item ${selectedAvatar === index ? "selected" : ""}`}
            onClick={() => handleSelectAvatar(index)}
          >
            <img src={avatar} alt={`Avatar ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelector;
