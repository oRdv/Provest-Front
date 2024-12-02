'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

const Submateria = ({ params }) => {
    const { materia } = params;
    const [topicos, setTopicos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Mapeamento de cores baseado nas matérias
    const colorMap = {
        matematica: '#e57373',
        historia: '#f06292',
        linguaPortuguesa: '#ffb74d',
        ingles: '#fff176',
        fisica: '#aed581',
        quimica: '#4db6ac',
        biologia: '#64b5f6',
        geografia: '#9575cd',
    };

    const headerColor = colorMap[materia] || '#ccc'; // Cor padrão

    // IDs de tópicos por matéria
    const topicoIdMap = {
        matematica: 58,
        historia: 59,
        linguaPortuguesa: 60,
        ingles: 61,
        fisica: 62,
        quimica: 63,
        biologia: 64,
        geografia: 65,
    };

    useEffect(() => {
        if (materia) {
            const fetchData = async () => {
                const id = topicoIdMap[materia];
                setIsLoading(true);
                try {
                    const response = await fetch(
                        `https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/topico/${id}`
                    );
                    const data = await response.json();
                    setTopicos(data.topico?.exercicios || []);
                } catch (error) {
                    console.error('Erro ao buscar tópicos:', error);
                    setTopicos([]);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchData();
        }
    }, [materia]);

    return (
        <div>
            <h1
                className={styles.header}
                style={{ backgroundColor: headerColor, color: '#fff' }}
            >
                {materia?.toUpperCase()}
            </h1>

            <div className={styles.content}>
                {isLoading ? (
                    <p>Carregando questões...</p>
                ) : topicos.length > 0 ? (
                    topicos.map((topico, index) => (
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
                    ))
                ) : (
                    <div className={styles.noData}>
                        <p>Não há questões disponíveis para esta matéria.</p>
                        <button onClick={() => window.location.href = '/materias'}>Voltar à página inicial</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Submateria;
