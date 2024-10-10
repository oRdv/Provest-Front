"use client";
import styles from './page.modules.css';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function EscreverRedacao() {
  const [text, setText] = useState('');
  const [lineCount, setLineCount] = useState(0);
  const maxLines = 30;
  const maxCharsPerLine = 65;

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
    }
  };

  const [selectedTheme, setSelectedTheme] = useState('');

  useEffect(() => {
    const theme = localStorage.getItem('selectedTheme');
    if (theme) {
      setSelectedTheme(theme);
      console.log(selectedTheme);

    }
  }, []);
  return (
    <div className="container">
      <div className="header">
        <h1>Vamos escrever!</h1>
      </div>

      <div className="theme-text">

        <div className="theme1">
          <p>Tema escolhido:</p>

          <div className="text">
            <b>{selectedTheme || "Nenhum tema selecionado"}</b>
          </div>
        </div>
      </div>

      <div className="redacao_container">
        <input type="text" className="titulo_redacao" placeholder="Título da Redação" />

        <textarea
          className="textarea_redacao"
          rows="30"
          cols="90"
          placeholder="Escreva sua redação aqui..." value={text} onChange={handleChange}
        ></textarea>

        <p className="line-counter">Linhas: {lineCount}/{maxLines}</p>
      </div>

      <Link href="../escreverRedacao" className="buttonWrite">Enviar para correção</Link>
    </div>
  );
}

export default EscreverRedacao;
