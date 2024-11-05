"use client";
import styles from "./page.module.css";
import React, { useState, useEffect } from 'react';
import FeedbackCorrecao from '@/components/ui/FeedbackCorrecao';

function EscreverRedacao() {
  const [text, setText] = useState('');
  const [titulo, setTitulo] = useState('');
  const [lineCount, setLineCount] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState('');
  const [temaId, setTemaId] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const maxLines = 30;
  const maxCharsPerLine = 75;

  const extrairCompetencias = (texto) => {
    const competencias = [];
    let notaFinal = null;

    console.log("Texto recebido para extração:", texto); // Log do texto recebido

    const regexCompetencia = /\*\s*\*\*\s*Competência\s*(\d+)\s*\((.*?)\):\s*\*\*\s*Nota:\s*(\d+)\s*\*\*\s*Explicação:\s*(.*?)(?=\*\s*\*\*\s*Competência\s*\d+|$)/g;
    const matches = [...texto.matchAll(regexCompetencia)];

    console.log("Matches encontrados:", matches);

    matches.forEach(match => {
      const [ , numeroCompetencia, descricao, nota, explicacao ] = match;
      competencias.push({
        numero: numeroCompetencia,
        descricao: descricao.trim(),
        nota: parseInt(nota, 10),
        explicacao: explicacao.trim(),
      });
    });

    const regexNotaFinal = /(?:Nota Total):?\s*(\d+)/i;
    const matchNotaFinal = texto.match(regexNotaFinal);

    if (matchNotaFinal) {
      notaFinal = parseInt(matchNotaFinal[1], 10);
    } else {
      console.log("Nota final não encontrada no texto:", texto);
    }

    return { competencias, notaFinal };
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
    }
  }, []);

  const handleSaveRedacao = async () => {
    const dadosRedacao = {
      titulo: titulo,
      texto: text,
      tema_id: temaId  
    };
  
    try {
      const response = await fetch('https://jengt-provest-backend-1.onrender.com/v1/jengt_provest/redacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosRedacao),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error(`Erro ao salvar a redação: ${errorData}`);
        throw new Error(`Erro ao salvar a redação: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Redação salva com sucesso:', data);
      setSubmissionMessage('Redação enviada para correção!'); 
    
      await handleSubmitRedacao();
    } catch (error) {
      console.error('Erro ao salvar a redação:', error.message);
      alert(`Erro ao salvar a redação: ${error.message}`);
    }  
  };

  const handleSubmitRedacao = async () => {
    try {
      const payload = { tema: selectedTheme, redacao: text };
      console.log("Dados enviados para correção:", payload);
  
      const response = await fetch("https://jengt-provest-backend-1.onrender.com/v1/jengt_provest/correcao/redacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error(`Erro ao enviar redação para correção: ${errorData}`);
        throw new Error(`Erro ao enviar redação: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Dados recebidos da correção:", data);
  
      // Extraindo o texto da correção
      const texto = data.response.candidates[0].content.parts[0].text; // Aqui está a extração do texto
  
      const { competencias, notaFinal } = extrairCompetencias(texto);
      console.log("Competências extraídas:", competencias);
      console.log("Nota final extraída:", notaFinal);
  
      setFeedback({
        tema: selectedTheme,
        comentario: "Análise da correção",
        competencias: competencias,
        notaFinal: notaFinal,
      });
    } catch (error) {
      console.error("Erro ao enviar redação para correção:", error);
      alert("Erro ao enviar redação para correção.");
    }
  };
  

  const toggleFeedbackVisibility = () => {
    setFeedbackVisible(!feedbackVisible);
  };

  return (
    <div className={styles.container}>
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
  
          <p className={styles.lineCounter}>Linhas: {lineCount}/{maxLines}</p>
  
          <button onClick={handleSaveRedacao} className={styles.buttonWrite}>Salvar Redação</button>
          {submissionMessage && <p className={styles.submissionMessage}>{submissionMessage}</p>} 
        </div>
    
        <div className={styles.feedbackToggle} onClick={toggleFeedbackVisibility}>
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
