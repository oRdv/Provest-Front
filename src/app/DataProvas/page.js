"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./page.module.css";

export default function Home() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [newEvent, setNewEvent] = useState("");
  const [viewingEvent, setViewingEvent] = useState(null);

  // Alterna a visibilidade do calendário
  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  // Carrega eventos do Local Storage ao iniciar
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedEvents = JSON.parse(localStorage.getItem("events")) || {};
        setEvents(storedEvents);
      } catch (error) {
        console.error("Erro ao carregar eventos do localStorage:", error);
        setEvents({});
      }
    }
  }, []);

  // Salva eventos no Local Storage sempre que houver uma mudança
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("events", JSON.stringify(events));
      } catch (error) {
        console.error("Erro ao salvar eventos no localStorage:", error);
      }
    }
  }, [events]);

  // Função para adicionar um novo evento
  const handleAddEvent = () => {
    if (!newEvent) return;

    const dateKey = selectedDate.toDateString();
    const updatedEvents = {
      ...events,
      [dateKey]: [...(events[dateKey] || []), newEvent],
    };

    setEvents(updatedEvents);
    setNewEvent(""); // Limpa o campo de entrada
  };

  // Função para lidar com a troca de datas no calendário
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Abrir modal para visualizar um evento
  const handleViewEvent = (event) => {
    setViewingEvent(event);
  };

  // Fechar o modal de evento
  const closeEventModal = () => {
    setViewingEvent(null);
  };

  // Provas estáticas
  const notes = [
    { id: 1, day: 20, month: "out", description: "UniCamp - 1ª fase", url: "/authentication/loginAluno" },
    { id: 2, day: 3, month: "nov", description: "ENEM - dia 1", url: "/authentication/loginAluno" },
    { id: 3, day: 10, month: "nov", description: "ENEM - dia 2", url: "/authentication/loginAluno" },
    { id: 4, day: 15, month: "nov", description: "Unesp - 1ª fase", url: "/authentication/loginAluno" },
    { id: 5, day: 17, month: "nov", description: "Fuvest - 1ª fase", url: "/authentication/loginAluno" },
    { id: 6, day: 22, month: "nov", description: "Mackenzie - 1ª fase", url: "/authentication/loginAluno" },
    { id: 7, day: 30, month: "nov", description: "PUC - 1ª fase", url: "/authentication/loginAluno" },
  ];

  return (
    <div className={styles.container}>
      {/* Ícones do topo */}
      <div className={styles.topIcons}>
        <Link href="#" className={styles.button}>
          <img src="/img/alfinete 1.png" alt="Cut Icon" className={styles.iconImage} />
        </Link>
        <Link href="#" className={styles.button}>
          <img src="/img/agenda.png" alt="Sticky Note Icon" className={styles.iconImage} />
        </Link>
        <Link href="/home" className={styles.button}>
          <img src="/img/icon-home.png" alt="Home Icon" className={styles.iconImage} />
        </Link>
        <Link href="#" className={styles.button}>
          <img src="/img/icon-chat2.png" alt="Comment Icon" className={styles.iconImage} />
        </Link>
        <div onClick={toggleCalendar} className={styles.button}>
          <img src="/img/calendario.png" alt="Calendar Icon" className={styles.iconImage} />
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className={styles.content}>
        <div className={styles.notesContainer}>
          <h2>Anotações</h2>
          <div className={styles.notes}>
            {notes.map((note) => (
              <Link key={note.id} href={note.url} className={styles.note}>
                <div className={styles.dateBox}>
                  <div className={styles.day}>{note.day}</div>
                  <div className={styles.month}>{note.month}</div>
                </div>
                <div className={styles.description}>{note.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Calendário Modal Lateral */}
      {isCalendarOpen && (
        <div className={styles.calendarModal}>
          <div className={styles.calendarHeader}>
            <span>{selectedDate.toLocaleString("default", { month: "long" })} &gt;</span>
            <span className={styles.year}>{selectedDate.getFullYear()}</span>
          </div>
          <div className={styles.calendarBody}>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              tileContent={({ date }) => {
                const dateKey = date.toDateString();
                return events[dateKey] ? (
                  <div style={{ color: "red", fontSize: "10px" }}>📌</div>
                ) : null;
              }}
            />
            {/* Mostrar os eventos da data selecionada */}
            <div style={{ marginTop: "20px" }}>
              <h2>Eventos para {selectedDate.toDateString()}</h2>
              <ul>
                {events[selectedDate.toDateString()]?.map((event, index) => (
                  <li key={index} onClick={() => handleViewEvent(event)} style={{ cursor: "pointer" }}>
                    {event}
                  </li>
                )) || <p>Sem eventos para este dia.</p>}
              </ul>
            </div>

            {/* Adicionar Evento */}
            <div style={{ marginTop: "20px" }}>
              <h3>Adicionar Evento</h3>
              <input
                type="text"
                value={newEvent}
                onChange={(e) => setNewEvent(e.target.value)}
                placeholder="Digite o evento"
                style={{ padding: "5px", width: "200px" }}
              />
              <button onClick={handleAddEvent} style={{ marginLeft: "10px", padding: "5px" }}>
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Visualização de Evento */}
      {viewingEvent && (
        <div className={styles.eventModal}>
          <h2>Detalhes do Evento</h2>
          <p>{viewingEvent}</p>
          <button onClick={closeEventModal}>Fechar</button>
        </div>
      )}
    </div>
  );
}
