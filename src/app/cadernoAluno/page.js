"use client";

import React, { useState } from 'react';
import styles from './page.modules.css';

const Notebook = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState(null);

  const handleNoteTitleChange = (e) => setNoteTitle(e.target.value);
  const handleNoteChange = (e) => setNote(e.target.value);

  const handleSaveNote = async () => {
      const aluno_id = localStorage.getItem("userId");

      console.log(aluno_id);
      
      if (!aluno_id) {
          setError('Erro ao obter o ID do usuário.');
          return;
      }

      const dadosAnot = {
          titulo: noteTitle,
          texto: note,
          aluno_id: aluno_id
      };

      try {
          const response = await fetch('https://provest-ehefgcbyg0g2d6gy.brazilsouth-01.azurewebsites.net/v1/jengt_provest/caderno', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(dadosAnot)
          });

          const data = await response.json();

          if (response.ok) {
              console.log("Anotação salva com sucesso:", data);
              setNoteTitle(''); 
              setNote('');      
              setError(null);    
          } else {
              setError(data.message || 'Erro ao salvar anotação.');
              console.error("Erro ao salvar anotação:", data);
          }
      } catch (error) {
          setError('Erro ao salvar anotação.');
          console.error("Erro ao salvar anotação:", error);
      }
  };

  return (
      <div className="digital-notebook-container">
          <div className="header">
              <p className="headerText">CADERNO DO ALUNO</p>
          </div>
          <div className="notebook-actions">
              <button className="save-button" onClick={handleSaveNote}>Salvar</button>
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
          {error && <p className="error-message">{error}</p>}
      </div>
  );
};

export default Notebook;