'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

const Submateria = ({ params }) => {
    const { materia } = params; // Extraindo o parâmetro "materia"
    const [topicos, setTopicos] = useState([]);
    const [videos, setVideos] = useState([]);

    // Fetch para tópicos
    useEffect(() => {
        if (materia) {
            const fetchData = async () => {
                const topicoIdMap = {
                    matematica: 58,
                    historia: 59,
                    linguaPortuguesa: 60,
                    fisica: 61,
                    quimica: 62,
                    biologia: 63,
                };
                const id = topicoIdMap[materia] || 58;

                try {
                    const response = await fetch(
                        `https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/topico/${id}`
                    );
                    const data = await response.json();

                    // Ajustando para acessar o array correto
                    setTopicos(data.topico.exercicios || []);
                } catch (error) {
                    console.error('Erro ao buscar tópicos:', error);
                }
            };

            fetchData();
        }
    }, [materia]);

    // Fetch para vídeos
    useEffect(() => {
        if (materia) {
            const fetchVideos = async () => {
                try {
                    const response = await fetch(
                        `https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/videoaulas`
                    );
                    const data = await response.json();
                    const filteredVideos = data.filter((video) => video.materia === materia);
                    setVideos(filteredVideos);
                } catch (error) {
                    console.error('Erro ao buscar vídeos:', error);
                }
            };

            fetchVideos();
        }
    }, [materia]);

    return (
        <div>
            {/* Seção de vídeos */}
            <div className={styles.videos}>
                {videos.map((video, index) => (
                    <div key={index} className={styles.video}>
                        <h3>{video.titulo}</h3>
                        <iframe
                            src={video.url}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>

            {/* Cabeçalho da matéria */}
            <h1 className={styles.header}>{materia?.toUpperCase()}</h1>

            {/* Seção de tópicos */}
            <div className={styles.content}>
                {topicos.map((topico, index) => (
                    <a
                        key={index}
                        href={`/questoes/${materia}/${topico.id}`}
                        className={styles.item}
                    >
                        <div className={styles.itemText}>{topico.questao}</div>
                        <div className={styles.itemIcon}>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Submateria;
