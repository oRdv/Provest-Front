
"use client";
import styles from './page.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function Redacao() {
  const [selectedOption, setSelectedOption] = useState("");
  const [temas, setTemas] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('');

  useEffect(() => {
    const fetchTemas = async () => {
      try {
        const response = await fetch("https://jengt-provest-backend.onrender.com/v1/jengt_provest/temas");
        const data = await response.json();
        console.log(data);
        setTemas(data.tema);
        console.log(setTemas);

      } catch (error) {
        console.error("Erro ao buscar temas:", error);
      }
    };

    fetchTemas();
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem('selectedTheme');
    if (theme) {
      setSelectedTheme(theme);
      setSelectedOption(theme);
    }
  }, []);

  const handleOptionChangeTheme = (event) => {
    const selectedThemeId = event.target.getAttribute('data-id'); // Obtém o ID do tema
    const selectedThemeName = event.target.value; // Obtém o nome do tema

    setSelectedOption(selectedThemeName);
    localStorage.setItem('selectedThemeId', selectedThemeId);
    localStorage.setItem('selectedThemeName', selectedThemeName);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setDropdownOpen(false);
  };

  const getDropdownTitle = () => {
    return selectedOption === "" ? "Escolha seu tema" : selectedOption;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>REDAÇÕES</h1>

      <div className={styles.content}>
        <div className={styles.selectContainer}>
          <div
            className={styles.selected}
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            {getDropdownTitle()}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className={styles.arrow}
            >
              <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              ></path>
            </svg>
          </div>

          {isDropdownOpen && (
            <div className={styles.options}>
              {temas.map((tema) => (
                <div key={tema.id} className={styles.option}>
                  <input
                    id={tema.nome}
                    name="option"
                    type="radio"
                    value={tema.nome}
                    data-id={tema.id}  // Armazenando o ID como um atributo
                    checked={selectedOption === tema.nome}
                    onChange={handleOptionChangeTheme}
                  />
                  <label htmlFor={tema.nome}>{tema.nome}</label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.infoBox}>
          <h2 className={styles.subtitle}>O que fazer na sua redação?</h2>
          <p>
            Tenha sua redação avaliada segundo os critérios de correção
            do Enem (Exame Nacional do Ensino Médio), o maior exame
            vestibular do Brasil. A nota da redação, variando entre 0 (zero)
            e 1000 (mil) pontos, é atribuída com base em 5 competências
            (200 pontos por competência):
          </p>
          <ul className={styles.competencias}>
            <li>
              <strong>C1</strong> Domínio da escrita formal da língua
              portuguesa.
            </li>
            <li>
              <strong>C2</strong> Compreender o tema e não fugir do que é
              proposto.
            </li>
            <li>
              <strong>C3</strong> Selecionar, relacionar, organizar e
              interpretar informações, fatos, opiniões e argumentos em
              defesa de um ponto de vista.
            </li>
            <li>
              <strong>C4</strong> Conhecimento dos mecanismos linguísticos
              necessários para a construção da argumentação.
            </li>
            <li>
              <strong>C5</strong> Proposta de intervenção e respeito aos
              direitos humanos.
            </li>
          </ul>
          <p className={styles.footer}>Boa Redação!</p>

          <Link href="../escreverRedacao" className={styles.buttonWrite}>Escrever redação!</Link>
        </div>
      </div>
    </div>
  );
}

export default Redacao;
