"use client";
import styles from './page.modules.css';
import React, { useState } from 'react';

function EscreverRedacao() {
  const [title, setTitle] = useState(''); 
  const [text, setText] = useState('');   

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Vamos escrever!</h1>
      </div>

      <div className="theme1">
        <p>Tema escolhido:</p>
        </div>

        <div className="theme-text">
        <div className="text">
          <b>Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil.</b>
        </div>
        </div>

      <div className="redacao-container">

      <div className="text-area">
        <p>Escreva seu texto aqui</p>
        <textarea
          value={text}
          onChange={handleTextChange}
          className="text-area-field"
        />
      </div>
      </div>
    </div>
  );
}

export default EscreverRedacao;
