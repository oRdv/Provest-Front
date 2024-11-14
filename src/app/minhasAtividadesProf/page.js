"use client";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./page.module.css";

function VideoaulasPage() {
  const [videos, setVideos] = useState([
    { id: 1, title: "Aula 1: Introdução", date: "14/11/2024" },
    { id: 2, title: "Aula 2: Conceitos Básicos", date: "15/11/2024" },
    { id: 3, title: "Aula 3: Guerra Fria", date: "15/11/2024" },
    { id: 4, title: "Aula 4: República", date: "15/11/2024" },
    { id: 5, title: "Aula 5: Relevos", date: "15/11/2024" },
  ]);

  const deleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>MINHAS ATIVIDADES</div>

      <div className={styles.videoList}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoCard}>
            <div className={styles.title}>{video.title}</div>
            <div className={styles.rightBox}>
              <FaTrash
                onClick={() => deleteVideo(video.id)}
                className={styles.trashIcon}
              />
              <span className={styles.date}>{video.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoaulasPage;
