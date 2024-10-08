"use client";
import styles from './page.module.css';
import React, { useState } from 'react';

function Redacao() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>REDAÇÕES</h1>
      <div className={styles.content}>
        <div className="content">
          <div className={styles.select}>
            <div
              className={styles.selected}
              data-default="All"
              data-one="option-1"
              data-two="option-2"
              data-three="option-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                class="arrow"
              >
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                ></path>
              </svg>
            </div>
            <div className={styles.options}>
              <div title="all">
                <input id="all" name="option" type="radio" checked="" />
                <label className="option" for="all" data-txt="All"></label>
              </div>
              <div title="option-1">
                <input id="option-1" name="option" type="radio" />
                <label className="option" for="option-1" data-txt="option-1"></label>
              </div>
              <div title="option-2">
                <input id="option-2" name="option" type="radio" />
                <label className="option" for="option-2" data-txt="option-2"></label>
              </div>
              <div title="option-3">
                <input id="option-3" name="option" type="radio" />
                <label className="option" for="option-3" data-txt="option-3"></label>
              </div>
            </div>
          </div>
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
        </div>
      </div>

      <div className={styles.navbar}>
        <button className={styles.navButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >

          </svg>
        </button>
        <button className={styles.navButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >

          </svg>
        </button>
        <button className={styles.navButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >

          </svg>
        </button>
      </div>
    </div>
  );
}

export default Redacao;
