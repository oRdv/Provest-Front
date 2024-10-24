"use client";
import styles from './page.modules.css';
import React, { useState, useEffect } from 'react';

function EscreverRedacao() {
  const [text, setText] = useState('');
  const [titulo, setTitulo] = useState(''); 
  const [lineCount, setLineCount] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState('');
  const [temaId, setTemaId] = useState(''); // Mova esta linha para aqui
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

  useEffect(() => {
    const themeIdFromStorage = localStorage.getItem('selectedThemeId');
    const themeName = localStorage.getItem('selectedThemeName');
    
    if (themeIdFromStorage) {
      setSelectedTheme(themeName); 
      setTemaId(themeIdFromStorage); // Utilize a variável correta
    }
  }, []);


  const handleSaveRedacao = async () => {
    const dadosRedacao = {
      titulo: titulo,
      texto: text,
      tema_id: temaId  
    };
  
    try {
      const response = await fetch('https://jengt-provest-backend.onrender.com/v1/jengt_provest/redacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosRedacao),
      });
  
      if (!response.ok) {
        console.error(`Erro: ${response.status} - ${response.statusText}`);
        const errorData = await response.text(); 
        console.error(`Resposta do servidor: ${errorData}`);
        throw new Error(`Erro ao salvar a redação: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Redação salva com sucesso:', data);
      alert('Redação salva com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar a redação:', error.message);
      alert(`Erro ao salvar a redação: ${error.message}`);
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
        <input
          type="text"
          className="titulo_redacao"
          placeholder="Título da Redação"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)} 
        />

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

      <button onClick={handleSaveRedacao} className="buttonWrite">Salvar Redação</button>
    </div>
  );
}

export default EscreverRedacao;
