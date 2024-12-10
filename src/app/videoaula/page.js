"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

const VideoPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Definindo os vídeos manualmente
    const videoLinks = [
      {
        subject: "Matemática",
        videos: [
          {
            title: "Funções e gráficos - Matemática",
            url: "https://www.youtube.com/embed/Wb0ceNgBM00",
          },
          {
            title: "Equações de 1º grau - Matemática",
            url: "https://www.youtube.com/embed/2yqqNtunyxI",
          },
        ],
      },
      {
        subject: "História",
        videos: [
          {
            title: "Revolução Francesa - História",
            url: "https://www.youtube.com/embed/eg47cCMcQr0",
          },
          {
            title: "Era Vargas - História",
            url: "https://www.youtube.com/embed/jQU6Ojetq8M",
          },
        ],
      },
      {
        subject: "Química",
        videos: [
          {
            title: "Ácidos e bases - Química",
            url: "https://www.youtube.com/embed/lFDq-SaFjeE",
          },
          {
            title: "Reações químicas - Química",
            url: "https://www.youtube.com/embed/mLzJzQ9q0Zo",
          },
        ],
      },
      {
        subject: "Física",
        videos: [
          {
            title: "Leis de Newton - Física",
            url: "https://www.youtube.com/embed/0Z9l9s7yDoM",
          },
          {
            title: "Movimento Uniformemente Variado - Física",
            url: "https://www.youtube.com/embed/oERg3fse2YI",
          },
        ],
      },
      {
        subject: "Biologia",
        videos: [
          {
            title: "Células - Biologia",
            url: "https://www.youtube.com/embed/DQw4YcS8XxI",
          },
          {
            title: "Genética - Biologia",
            url: "https://www.youtube.com/embed/Tm-GzeFPOmE",
          },
        ],
      },
      {
        subject: "Português",
        videos: [
          {
            title: "Interpretação de texto - Português",
            url: "https://www.youtube.com/embed/X-OCAYOaZ7o",
          },
          {
            title: "Figuras de linguagem - Português",
            url: "https://www.youtube.com/embed/p_M0bZ3yTVw",
          },
        ],
      },
    ];
    

    setVideos(videoLinks);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>UniCamp - Eletroquímica - VídeoAula</div>
      {/* Exibe o primeiro vídeo manualmente para testar */}
      {videos.length > 0 && videos[0].videos[0] && (
        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            width="100%"
            height="400"
            src={videos[0].videos[0].url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
        {videos.length > 0 &&
          videos.map((subject, index) => (
            <div key={index} className={styles.videoItem}>
              <h2>{subject.subject}</h2>
              <div className={styles.videoSubList}>
                {subject.videos.map((video, videoIndex) => (
                  <div
                    key={videoIndex}
                    className={styles.videoLink}
                    onClick={() => {
                      const videoContainer = document.querySelector(
                        `iframe[src="${video.url}"]`
                      );
                      if (videoContainer) {
                        videoContainer.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <h4>{video.title}</h4>
                    <p>Duração: Não especificada</p>
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
