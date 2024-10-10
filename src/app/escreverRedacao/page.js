"use client";
import styles from './page.modules.css';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function EscreverRedacao() {
  const [text, setText] = useState('');
  const [lineCount, setLineCount] = useState(0);
  const [score, setScore] = useState(null);
  const maxLines = 30;
  const maxCharsPerLine = 65;
  const apiKey = ""  

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
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: {
            text: text,
          }
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Erro ao corrigir: ${response.status}`);
      }
  
      const data = await response.json();
      
      const resultado = {
        ortografia: data.ortografia || 50,
        pontuacao: data.pontuacao || 70,
        coerencia: data.coerencia || 60,
        paragrafo: data.paragrafo || 100,
        notaFinal: data.notaFinal || 680,
      };
  
      setScore(resultado);
    } catch (error) {
      console.error('Erro ao corrigir a redação:', error);
    }
  };
  
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
          placeholder="Escreva sua redação aqui..."
          value={text}
          onChange={handleChange}
        ></textarea>

        <p className="line-counter">Linhas: {lineCount}/{maxLines}</p>
      </div>

      <button onClick={handleSubmit} className="buttonWrite">Enviar para correção</button>

      {/* Exibição dos resultados da correção */}
      {score && (
        <div className="resultado-correcao">
          <h2>Resultado da Correção:</h2>
          <p>Ortografia: {score.ortografia}%</p>
          <p>Pontuação: {score.pontuacao}%</p>
          <p>Coerência: {score.coerencia}%</p>
          <p>Parágrafo: {score.paragrafo}%</p>
          <p>Nota Final: {score.notaFinal}</p>
        </div>
      )}
    </div>
  );
}

export default EscreverRedacao;