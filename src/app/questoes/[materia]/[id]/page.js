'use client';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Questoes = () => {
  const { materia, id } = useParams();
  const router = useRouter();
  const [questao, setQuestao] = useState(null);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [respostaCorreta, setRespostaCorreta] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [respostaFinalizada, setRespostaFinalizada] = useState(false);
  const [questoesRestantes, setQuestoesRestantes] = useState(true);

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

  const headerColor = colorMap[materia] || '#ccc';

  useEffect(() => {
    const fetchQuestao = async () => {
      try {
        const topicoIdMap = {
          matematica: 58,
          historia: 59,
          linguaPortuguesa: 60,
          fisica: 61,
          quimica: 62,
          biologia: 63,
        };
        const topicoId = topicoIdMap[materia] || 58;

        const response = await fetch(
          `https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/topico/${topicoId}`
        );
        const data = await response.json();

        if (!data.topico?.exercicios || data.topico.exercicios.length === 0) {
          setQuestoesRestantes(false);
          return;
        }

        const questaoFiltrada = data.topico.exercicios.find((q) => q.id === parseInt(id));
        if (questaoFiltrada) {
          setQuestao(questaoFiltrada);
          const respostaCorreta = questaoFiltrada.alternativas.find((alt) => alt.resposta === 1);
          setRespostaCorreta(respostaCorreta?.opcao);
        } else {
          setQuestoesRestantes(false);
        }
      } catch (error) {
        console.error('Erro ao buscar questão:', error);
        setQuestoesRestantes(false);
      }
    };

    if (id && materia) {
      fetchQuestao();
    }
  }, [materia, id]);

  const handleRespostaClick = (opcao) => {
    if (!respostaFinalizada) {
      setRespostaSelecionada(opcao);
    }
  };

  const handleVerificarResposta = () => {
    if (respostaSelecionada) {
      setSnackbarMessage(
        respostaSelecionada === respostaCorreta ? 'Resposta correta!' : 'Resposta incorreta!'
      );
      setOpenSnackbar(true);
      setRespostaFinalizada(true);
    }
  };

  const handleProximaQuestao = () => {
    const proximoId = parseInt(id) + 1;
    router.push(`/questoes/${materia}/${proximoId}`);
  };

  const handleVoltarParaMaterias = () => {
    router.push('/materias');
  };

  return (
    <div>
      <h1
        className={styles.header}
        style={{ backgroundColor: headerColor, color: '#fff' }}
      >
        {materia?.toUpperCase()}
      </h1>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={snackbarMessage === 'Resposta correta!' ? 'success' : 'error'} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {questoesRestantes ? (
        questao ? (
          <div className={styles.content}>
            <h2 className={styles.title}>Questão</h2>
            <p className={styles.question}>{questao.questao}</p>
            <div className={styles.options}>
              {questao.alternativas.map((alt, index) => {
                const isSelected = respostaSelecionada === alt.opcao;
                const isCorrect = respostaCorreta === alt.opcao;
                const isIncorrect = isSelected && respostaCorreta !== alt.opcao;

                return (
                  <p
                    key={index}
                    className={`${styles.option} ${
                      respostaFinalizada
                        ? isCorrect
                          ? styles.correct
                          : isIncorrect
                          ? styles.incorrect
                          : ''
                        : isSelected
                        ? styles.selected
                        : ''
                    }`}
                    onClick={() => handleRespostaClick(alt.opcao)}
                  >
                    {String.fromCharCode(97 + index)}) {alt.opcao}
                  </p>
                );
              })}
            </div>
            <button
              className={styles.button}
              onClick={handleVerificarResposta}
              disabled={!respostaSelecionada || respostaFinalizada}
            >
              Verificar Resposta
            </button>
            <button className={styles.button} onClick={handleProximaQuestao}>
              Próxima Questão
            </button>
          </div>
        ) : (
          <p>Carregando questão...</p>
        )
      ) : (
        <div className={styles.noMoreQuestions}>
          <div className={styles.messageBox}>
            <h2>🎉 Parabéns!</h2>
            <p>Você concluiu todas as questões desta matéria.</p>
            <button className={styles.button} onClick={handleVoltarParaMaterias}>
              Voltar para todas as matérias
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questoes;
