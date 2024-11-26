'use client'

import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

// Componente Calendar
export default function Calendar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleCalendar = () => {
        setIsOpen(!isOpen);
    };
  
    return (
      <div>
      {/* Substituindo o ícone por uma imagem */}
      <div className={styles.iconLink} onClick={toggleCalendar}>
          <Image
              src="/img/perfil.png" // Caminho da imagem
              width={70} // Tamanho da imagem
              height={70} // Tamanho da imagem
              alt="Ícone de Calendário" // Texto alternativo
          />
      </div>
  
            {/* Calendário visível com base no estado */}
            <div className={`${styles.calendar} ${isOpen ? styles.show : ''}`}>
                <div className={styles.calendarHeader}>
                    <span>Agosto &gt;</span>
                    <span className={styles.year}>2024</span>
                </div>
                <div className={styles.calendarBody}>
                    <div className={styles.dayName}>D</div>
                    <div className={styles.dayName}>S</div>
                    <div className={styles.dayName}>T</div>
                    <div className={styles.dayName}>Q</div>
                    <div className={styles.dayName}>Q</div>
                    <div className={styles.dayName}>S</div>
                    <div className={styles.dayName}>S</div>
                    {/* Exemplo de dias */}
                    <div class="day-number">28</div>
              <div class="day-number">29</div>
              <div class="day-number">30</div>
              <div class="day-number">31</div>
              <div class="day-number">01</div>
              <div class="day-number">02</div>
              <div class="day-number">03</div>
              <div class="day-number">04</div>
              <div class="day-number">05</div>
              <div class="day-number">06</div>
              <div class="day-number">07</div>
              <div class="day-number">08</div>
              <div class="day-number">09</div>
              <div class="day-number">10</div>
              <div class="day-number">11</div>
              <div class="day-number">12</div>
              <div class="day-number">13</div>
              <div class="day-number">14</div>
              <div class="day-number">15</div>
              <div class="day-number">16</div>
              <div class="day-number">17</div>
              <div class="day-number">18</div>
              <div class="day-number">19</div>
              <div class="day-number">20</div>
              <div class="day-number">21</div>
              <div class="day-number">22</div>
              <div class="day-number">23</div>
              <div class="day-number">24</div>
              <div class="day-number">25</div>
              <div class="day-number">26</div>
              <div class="day-number">27</div>
              <div class="day-number">28</div>
              <div class="day-number">29</div>
              <div class="day-number">30</div>
              <div class="day-number">31</div>
              <div class="day-number">01</div>
              <div class="day-number">02</div>
              <div class="day-number">03</div>
              <div class="day-number">04</div>
              <div class="day-number">05</div>
              <div class="day-number">06</div>
              <div class="day-number">07</div>
  
                    {/* E assim por diante... */}
                </div>
            </div>
        </div>
    );
  }