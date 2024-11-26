"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { FaChevronLeft, FaPause, FaChevronRight } from "react-icons/fa";
// Função para buscar vídeos da API
const fetchVideos = async () => {
  try {
    const response = await fetch(
      "https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/videoaulas"
    );
    const data = await response.json();
    return data.videoaulas; // Retorna o array de vídeo-aulas
  } catch (error) {
    console.error("Erro ao buscar vídeos:", error);
    return [];
  }
};
// Função para extrair o ID do vídeo do YouTube a partir do link
const extractYouTubeId = (url) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.*\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const VideoPage = () => {
  const [videoaulas, setVideoaulas] = useState([]); // Estado para armazenar os vídeos
  const [currentVideo, setCurrentVideo] = useState(null); // Estado para armazenar o vídeo atual
  // Carregar os vídeos quando o componente for montado
  useEffect(() => {
    const loadVideos = async () => {
      const videos = await fetchVideos();
      setVideoaulas(videos);
      if (videos.length > 0) {
        setCurrentVideo(videos[0].videoaulas[0]); // Define o primeiro vídeo como o atual
      }
    };
    loadVideos();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>UniCamp - Eletroquímica - VídeoAula</div>
      {/* Exibe o vídeo atual */}
      {currentVideo && (
        <div className={styles.videoPlaceholder}>
          <div className={styles.videoContainer}>
            <iframe
              className={styles.video}
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${extractYouTubeId(currentVideo.link)}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <div className={styles.content}>
        <p>Olá, estudante!</p>
        <p>Para iniciar os seus estudos sobre esse tema, selecionamos esse conteúdo para você.</p>
      </div>
      <div className={styles.buttons}>
        <a href="/chatAluno">
          <button>Entrar em contato com um professor</button>
        </a>
        <a href="/questoes-respostas">
          <button>Questões e Respostas</button>
        </a>
      </div>

      {/* Lista de vídeos disponíveis */}
      <div className={styles.videoList}>
        {videoaulas.length > 0 &&
          videoaulas.map((videoaula, index) => (
            <div key={index} className={styles.videoItem}>
              <h3>{videoaula.nome}</h3>
              <div className={styles.videoSubList}>
                {videoaula.videoaulas.map((video, videoIndex) => (
                  <div
                    key={videoIndex}
                    className={styles.videoLink}
                    onClick={() => setCurrentVideo(video)} // Altera o vídeo atual
                  >
                    <h4>{video.titulo}</h4>
                    <p>Duração: {video.duracao}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VideoPage;