'use client'

import React, { useState } from 'react';
import styles from './page.module.css';

const Schedule = () => {
  const [formData, setFormData] = useState({
    dataProva: '',
    cursoDesejado: '',
    instituicao: '',
    disciplinas: {
      fisica: '',
      quimica: '',
      biologia: '',
      ingles: '',
      matematica: '',
      portugues: '',
      historia: '',
      geografia: '',
    },
    horasDiarias: {
      seg: 360,  // 6 horas = 360 minutos
      ter: 360,
      qua: 360,
      quin: 360,
      sex: 240,  // 4 horas = 240 minutos
      sab: 120,  // 2 horas = 120 minutos
      dom: 0,    // 0 horas = 0 minutos
    },
    diasEstudo: [],
  });

 
// Função para formatar horas de forma simples
const formatarHoras = (horas) => {
  return `${horas}h`;
};

const handleChange = (e) => {
  const { name, value } = e.target;

  // Verificando se o campo é de horas diárias
  if (name.startsWith('horasDiarias')) {
    const dia = name.split('.')[1]; // Extrai o nome do dia (ex: 'seg', 'ter')
    const horas = parseInt(value.replace('h', '').trim(), 10) || 0; // Converte para número de horas

    setFormData({
      ...formData,
      horasDiarias: {
        ...formData.horasDiarias,
        [dia]: horas, // Atualiza o valor em horas
      },
    });
    } else if (name in formData.disciplinas) {
      // Caso seja um campo de disciplina
      setFormData({
        ...formData,
        disciplinas: {
          ...formData.disciplinas,
          [name]: value,
        },
      });
    } else {
      // Outros campos normais
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const toggleDay = (day) => {
    setFormData((prevData) => {
      const newDays = prevData.diasEstudo.includes(day)
        ? prevData.diasEstudo.filter((d) => d !== day)
        : [...prevData.diasEstudo, day];
      return { ...prevData, diasEstudo: newDays };
    });
  };

  const renderDays = () => {
    const days = ['Seg', 'Ter', 'Qua', 'Quin', 'Sex', 'Sab', 'Dom'];
    return days.map((day) => (
      <div
        key={day}
        className={`${styles.day} ${formData.diasEstudo.includes(day) ? styles.selected : ''}`}
        onClick={() => toggleDay(day)}
      >
        {day}
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img alt="Logo" src="/img/logo-verde.png" />
        <h1>MONTE SEU CRONOGRAMA</h1>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.leftSection}>
          <div className={styles.sectionTitle}>Informações de estudo</div>
          <div className={styles.formGroup}>
            <label htmlFor="data-prova">Data da prova:</label>
            <input id="data-prova" name="dataProva" type="text" value={formData.dataProva} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="curso-desejado">Curso desejado:</label>
            <input id="curso-desejado" name="cursoDesejado" type="text" value={formData.cursoDesejado} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="instituicao">Instituição:</label>
            <input id="instituicao" name="instituicao" type="text" value={formData.instituicao} onChange={handleChange} />
          </div>
          <div className={styles.disciplines}>
            <table>
              <thead>
                <tr>
                  <th>Disciplinas</th>
                  <th>Fácil</th>
                  <th>Médio</th>
                  <th>Difícil</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(formData.disciplinas).map((disciplina) => (
                  <tr key={disciplina}>
                    <td>{disciplina.charAt(0).toUpperCase() + disciplina.slice(1)}</td>
                    <td><input name={disciplina} type="radio" value="facil" onChange={handleChange} /></td>
                    <td><input name={disciplina} type="radio" value="medio" onChange={handleChange} /></td>
                    <td><input name={disciplina} type="radio" value="dificil" onChange={handleChange} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.studyDays}>
            <h3>Dias de estudo</h3>
            <div className={styles.days}>
              {renderDays()}
            </div>
          </div>
          <div className={styles.dailyHours}>
            <h3>Carga horária diária</h3>
            <div className={styles.hours}>
              {Object.keys(formData.horasDiarias).map((dia) => (
                <div key={dia} className={styles.hour}>
                  {dia.charAt(0).toUpperCase() + dia.slice(1)}<br />
                  <input
                    type="text"
                    value={formatarHoras(formData.horasDiarias[dia])}  // Exibe no formato "xh"
                    onChange={handleChange}
                    name={`horasDiarias.${dia}`} // A cada mudança, chama handleChange com o nome adequado
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button className={styles.generateButton}>Gerar Cronograma</button>
    </div>
  );
};

export default Schedule;
