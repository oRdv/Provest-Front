"use client";

import React, { useState } from 'react';
import styles from'./page.modules.css';

function CadernoAluno() {

  const [noteTitle, setNoteTitle] = useState(""); 
  const [note, setNote] = useState(""); 

  const handleNoteTitleChange = (event) => {
    setNoteTitle(event.target.value); 
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value); 
  };

  return (
    <div className="digital-notebook-container">
      <div className="header">
        <p className={styles.headerText}>CADERNO DO ALUNO</p>
      </div>
      <div className="notebook-actions">
          <button className="save-button">Salvar</button>
          <div className="right-actions">
            <button className="new-annotation-button">+</button>
            <button className="favorite-button">
              <i className="fa fa-star" aria-hidden="true"></i> Favorite
            </button>
          </div>
        </div>
      <div className="notebook-container">
        <div className="notebook-header">
          <input
            type="text"
            className="titleCaderno"
            value={noteTitle}
            onChange={handleNoteTitleChange}
            placeholder="Insira o título"
          />
        </div>
        <div className="notebook">
          <textarea
            className="notebook-textarea"
            value={note}
            onChange={handleNoteChange}
            placeholder="Digite aqui suas anotações"
          />
        </div>
      </div>
    </div>
  );
}

export default CadernoAluno;