import React from 'react';
import styles from'./page.modules.css';

function cadernoAluno() {

  return (
    <div className="digital-notebook-container">
      <div className="header">
        <p className={styles.headerText}>Digital Notebook</p>
      </div>
      <div className="notebook-container">
        <div className="notebook-header">
          <input
            type="text"
            className="titleCaderno"
            value={noteTitle}
            onChange={handleNoteTitleChange}
            placeholder="Note Title"
          />
        </div>
        <div className="notebook">
          <textarea
            className="notebook-textarea"
            value={note}
            onChange={handleNoteChange}
            placeholder="Write your notes here..."
          />
        </div>
        <div className="notebook-actions">
          <button className="save-button">Save</button>
          <div className="right-actions">
            <button className="new-annotation-button">New Annotation</button>
            <button className="favorite-button">
              <i className="fa fa-star" aria-hidden="true"></i> Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cadernoAluno;