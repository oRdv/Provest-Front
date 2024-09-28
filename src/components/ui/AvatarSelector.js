import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const AvatarSelector = ({ icons, onSelect, onClose }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const checkAppElement = () => {
      const appElement = document.getElementById('__next');
      if (appElement) {
        Modal.setAppElement('#__next');
        setIsClient(true);
      } else {
        setTimeout(checkAppElement, 100);
      }
    };

    if (typeof window !== 'undefined') {
      checkAppElement();
    }
  }, []);

  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleIconClick = (icon) => {
    setSelectedAvatar(icon);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
      onSelect(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSelect = () => {
    onSelect(selectedAvatar || uploadedImage);
    onClose();
  };

  if (!isClient) {
    return null;
  }

  return (
    <Modal isOpen onRequestClose={onClose} contentLabel="Select Avatar" className="modal-content">
      <h2>Escolha um avatar</h2>
      <div className="avatar-grid">
        {icons.map((icon, index) => (
          <div key={index} onClick={() => handleIconClick(icon)} className="avatar-item">
            <img src={icon} alt={`Icon ${index}`} className={`avatar-icon ${selectedAvatar === icon ? 'selected' : ''}`} />
          </div>
        ))}
        <div className="avatar-item upload">
          <input type="file" accept="image/*" onChange={handleUpload} />
          {uploadedImage && <img src={uploadedImage} alt="Uploaded" className="avatar-icon" />}
        </div>
      </div>
      <button onClick={handleSelect}>Selecionar Avatar</button>
    </Modal>
  );
};

export default AvatarSelector;
