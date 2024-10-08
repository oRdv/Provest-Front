"use client";
import styles from './page.module.css';
import React, { useState } from 'react';

function TemaRedacao() {
  
  const [selectedValue, setSelectedValue] = useState('Option 1');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>REDAÇÕES</h1>
      <div className={styles.content}>
        <div className={styles.infoBox}>
          <div className={styles.dropdown}>
            <select value={selectedValue} onChange={handleChange}>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemaRedacao;


