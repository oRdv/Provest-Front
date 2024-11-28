'use client';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Questoes = () => {
  const { materia, id } = useParams(); // `id` é o ID do tópico
  const [questao, setQuestao] = useState(null);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null); // Estado para a resposta selecionada
  const [respostaCorreta, setRespostaCorreta] = useState(null); // Estado para a resposta correta
  const [openSnackbar, setOpenSnackbar] = useState(false); // Estado para controle do Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(''); // Mensagem do Snackbar
  const [isRespostaVerificada, setIsRespostaVerificada] = useState(false); // Controle de verificação de resposta
  const router = useRouter(); // Hook de roteamento para navegar para a próxima questão

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/topico/${id}`
          );
          const data = await response.json();

          // Log da resposta da API
          console.log("Resposta da API:", data);

          // Verifique se a resposta contém as questões
          if (!data.topico?.exercicios || data.topico.exercicios.length === 0) {
            console.error('Nenhuma questão encontrada para o tópico!');
            return;
          }

          // Filtra a questão com o id recebido
          const questaoFiltrada = data.topico.exercicios.find((questao) => questao.id === parseInt(id));

          // Se a questão for encontrada, definimos o estado
          if (questaoFiltrada) {
            setQuestao(questaoFiltrada);
          } else {
            console.error('Questão com ID não encontrada!');
          }
        } catch (error) {
          console.error('Erro ao buscar os dados da questão:', error);
        }
      };

      fetchData();
    }
  }, [id]);

  const handleRespostaClick = (resposta) => {
    setRespostaSelecionada(resposta); // Atualiza a resposta selecionada
  };

  const handleVerResposta = () => {
    if (respostaSelecionada) {
      const respostaCorreta = questao.alternativas.find(
        (alt) => alt.resposta === 1
      );
      setRespostaCorreta(respostaCorreta?.opcao); // Define a resposta correta

      // Verifica se a resposta do usuário está correta
      if (respostaSelecionada === respostaCorreta?.opcao) {
        setSnackbarMessage('Resposta correta!');
      } else {
        setSnackbarMessage('Resposta incorreta, tente novamente!');
      }
      setOpenSnackbar(true); // Abre o Snackbar
      setIsRespostaVerificada(true); // Marca que a resposta foi verificada
    }
  };

  const handleProximaQuestao = () => {
    const proximoId = parseInt(id) + 1; // Incrementa o ID para a próxima questão
    router.push(`/questoes/${materia}/${proximoId}`); // Navega para o próximo ID da questão
  };

  return (
    <div>
      <header className={styles.header}>{materia?.toUpperCase()}</header>

      {/* Exibição do Snackbar no topo */}
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

      {questao ? (
        <div className={styles.content}>
          <div className={styles.title}>Questão</div>
          <div className={styles.question}>{questao.questao}</div>
          <div className={styles.options}>
            {questao.alternativas && Array.isArray(questao.alternativas) && questao.alternativas.length > 0 ? (
              questao.alternativas.map((alt, index) => (
                <p
                  key={alt.id}
                  className={respostaSelecionada === alt.opcao ? styles.selected : ''}
                  onClick={() => handleRespostaClick(alt.opcao)} // Marca a alternativa ao clicar
                >
                  {String.fromCharCode(97 + index)}) {alt.opcao}
                </p>
              ))
            ) : (
              <p>Alternativas não disponíveis</p>
            )}
          </div>

          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onClick={handleVerResposta} // Mostra a resposta correta ao clicar
            >
              Ver resposta correta
            </button>
          </div>

          {isRespostaVerificada && (
            <div className={styles.correctAnswer}>
              <p>Resposta correta: {respostaCorreta}</p>
              <button className={styles.button} onClick={handleProximaQuestao}>
                Próxima questão
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Questoes;
