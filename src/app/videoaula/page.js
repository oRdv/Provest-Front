"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/router";

// Função para buscar vídeos por matéria
const fetchVideos = async (subject) => {
  try {
    const response = await fetch(
      `https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/videoaulas?subject=${subject}`
    );
    const data = await response.json();
    return data.videoaulas || [];
  } catch (error) {
    console.error("Erro ao buscar vídeos:", error);
    return [];
  }
};

const VideoPage = () => {
  const router = useRouter();
  const { subject } = router.query; // Obtém o parâmetro da URL
  const [videoaulas, setVideoaulas] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    if (subject) {
      const loadVideos = async () => {
        const videos = await fetchVideos(subject);
        setVideoaulas(videos);
        if (videos.length > 0) {
          setCurrentVideo(videos[0].videoaulas[0]);
        }
      };
      loadVideos();
    }
  }, [subject]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>Vídeos - {subject?.toUpperCase()}</div>

      {currentVideo && (
        <div className={styles.videoPlaceholder}>
          <iframe
            className={styles.video}
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${currentVideo.link}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className={styles.videoList}>
        {videoaulas.map((videoaula, index) => (
          <div key={index} className={styles.videoItem}>
            <h3>{videoaula.nome}</h3>
            {videoaula.videoaulas.map((video, videoIndex) => (
              <div
                key={videoIndex}
                className={styles.videoLink}
                onClick={() => setCurrentVideo(video)}
              >
                <h4>{video.titulo}</h4>
                <p>Duração: {video.duracao}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
