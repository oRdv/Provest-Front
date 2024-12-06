"use client";
import styles from "./page.module.css";
import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import FeedbackCorrecao from '@/components/ui/FeedbackCorrecao';

function EscreverRedacao() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [text, setText] = useState('');
  const [titulo, setTitulo] = useState('');
  const [lineCount, setLineCount] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState('');
  const [temaId, setTemaId] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const maxLines = 30;
  const maxCharsPerLine = 80;

  const extrairCompetencias = (texto) => {
    const partes = texto.split(/\*\*\s|\s\*\*/).slice(1);
    return partes.length ? partes : [];
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleChange = (e) => {
    let inputText = e.target.value;
    let lines = inputText.split('\n');

    let currentLineCount = 0;
    lines.forEach(line => {
      currentLineCount += Math.ceil(line.length / maxCharsPerLine);
    });

    if (currentLineCount <= maxLines) {
      setText(inputText);
      setLineCount(currentLineCount);
    } else {
      setText(inputText.slice(0, maxLines * maxCharsPerLine));
      setLineCount(maxLines);
    }
  };

  useEffect(() => {
    const themeIdFromStorage = localStorage.getItem('selectedThemeId');
    const themeName = localStorage.getItem('selectedThemeName');

    if (themeIdFromStorage) {
      setSelectedTheme(themeName);
      setTemaId(themeIdFromStorage);
    } else {
      setError('Por favor, selecione um tema.');
      setOpenSnackbar(true);
    }
  }, []);

  const handleSaveRedacao = async () => {
    if (!text || !temaId) {
      setError("Preencha todos os campos antes de enviar!");
      setOpenSnackbar(true);
      return;
    }

    const dadosRedacao = {
      titulo: titulo || "Sem título",
      texto: text,
      tema_id: Number(temaId),
      aluno_id: 2,
    };

    try {
      const response = await fetch('https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/redacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosRedacao),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro ao salvar a redação: ${errorText}`);
      }

      setSuccess('Redação enviada para correção!');
      setOpenSnackbar(true);
      handleSubmitRedacao();
    } catch (error) {
      setError(`Erro ao salvar a redação: ${error.message}`);
      setOpenSnackbar(true);
    }
  };

  const handleSubmitRedacao = async () => {
    try {
      const payload = { tema: selectedTheme, redacao: text };

      const response = await fetch("http://localhost:3001/v1/jengt_provest/correcao/redacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Erro ao enviar redação: ${errorData}`);
      }

      const data = await response.json();
      const texto = data.response.candidates[0].content.parts[0].text;
      const competencias = extrairCompetencias(texto);

      setFeedback({
        tema: selectedTheme,
        comentario: "Análise da correção",
        competencias: Array.from({ length: 19 }, (_, index) => ({
          competencias: competencias[index * 2] || "",
          explicacao: competencias[index * 2 + 1] || ""
        })),
      });
      setFeedbackVisible(true);

    } catch (error) {
      setError("Erro ao enviar redação para correção.");
      setOpenSnackbar(true);
    }
  };

  return (
    <div className={styles.container}>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={error ? 'error' : 'success'}
          sx={{ width: '100%' }}
        >
          {error || success}
        </Alert>
      </Snackbar>

      <div className={styles.header}>
        <h1>Vamos escrever!</h1>
      </div>

      <div className={styles.layout}>
        <div className={styles.redacao_area}>
          <div className={styles.theme1}>
            <p>Tema escolhido:</p>
            <div className={styles.text}>
              <b>{selectedTheme || "Nenhum tema selecionado"}</b>
            </div>
          </div>

          <div className={styles.body_redacao}>
            <input
              type="text"
              className={styles.titulo_redacao}
              placeholder="Título da Redação"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />

            <textarea
              className={styles.textarea_redacao}
              rows="30"
              cols="90"
              placeholder="Escreva sua redação aqui..."
              value={text}
              onChange={handleChange}
            ></textarea>
          </div>

          <p className={styles.lineCounter}>Linhas: {lineCount}/{maxLines}</p>

          <button onClick={handleSaveRedacao} className={styles.buttonWrite}>
            Salvar Redação
          </button>
        </div>

        <div className={styles.feedbackToggle} onClick={() => setFeedbackVisible(!feedbackVisible)}>
          {feedbackVisible ? '✖️' : '☰'}
        </div>

        {feedbackVisible && feedback && (
          <div className={styles.feedback_area}>
            <FeedbackCorrecao feedback={feedback} />
          </div>
        )}
      </div>
    </div>
  );
}

export default EscreverRedacao;