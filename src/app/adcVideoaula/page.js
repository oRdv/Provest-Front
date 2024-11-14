"use client";
import React, { useState } from 'react';
import styles from './page.module.css';

function VideoaulaForm() {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setSelectedFile(file);
    } else {
      alert("Por favor, selecione um arquivo de vídeo válido.");
    }
  };

  const addVideo = () => {
    if (title.trim() && description.trim() && selectedFile) {
      const newVideo = { title, description, file: selectedFile };
      setVideos([...videos, newVideo]);
      setTitle('');
      setDescription('');
      setSelectedFile(null);
    } else {
      alert("Por favor, preencha o título, a descrição e selecione um vídeo.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>VIDEOAULAS</div>
      <div className={styles.content}>
        <button className={styles.addButton} onClick={() => document.getElementById('fileInput').click()}>
          + Adicionar uma VIDEOAULA
        </button>
        
        <input
          id="fileInput"
          type="file"
          accept="video/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

        <div className={styles.videoSpace}>
          {videos.map((video, index) => (
            <div key={index} className={styles.videoItem}>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <video controls src={URL.createObjectURL(video.file)} width="300" />
            </div>
          ))}
        </div>

        <input
          className={styles.input}
          type="text"
          placeholder="Crie um título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className={styles.textarea}
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button className={styles.saveButton} onClick={addVideo}>
          SALVAR
        </button>
      </div>
    </div>
  );
}

export default VideoaulaForm;
