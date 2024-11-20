"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import styles from './page.modules.css';

const Notebook = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const router = useRouter();

  const handleNoteTitleChange = (e) => setNoteTitle(e.target.value);
  const handleNoteChange = (e) => setNote(e.target.value);

  const handleSaveNote = async () => {
    const aluno_id = localStorage.getItem("userId");

    if (!aluno_id) {
      setError('Erro ao obter o ID do usuário.');
      setSnackbarSeverity('error');
      setSnackbarMessage('Erro ao obter o ID do usuário.');
      setOpenSnackbar(true);
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
        setNoteTitle('');
        setNote('');
        setError(null);
        setSnackbarSeverity('success');
        setSnackbarMessage('Anotação salva com sucesso!');
      } else {
        setError(data.message || 'Erro ao salvar anotação.');
        setSnackbarSeverity('error');
        setSnackbarMessage(data.message || 'Erro ao salvar anotação.');
      }
    } catch (error) {
      setError('Erro ao salvar anotação.');
      setSnackbarSeverity('error');
      setSnackbarMessage('Erro ao salvar anotação.');
    }

    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleViewNotes = () => {
    router.push('/todasAnotacoes');
  };

  return (
    <div className="digital-notebook-container">
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <div className="header">
        <p className="headerText">CADERNO DO ALUNO</p>
      </div>
      <div className="notebook-actions">
        <button className="save-button" onClick={handleSaveNote}>Salvar</button>
        <button className="view-button" onClick={handleViewNotes}>Ver Todas as Anotações</button>
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
