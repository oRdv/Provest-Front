import React from 'react';
import styles from './page.module.css';

const EventPage = () => {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.backArrow}>&larr;</div>
                    <div className={styles.event}>
                        
                        <div className={styles.eventTitle}>
                            <span className={styles.day}>20</span>
                            <span className={styles.month}>out</span>
                            <span className={styles.eventName}>UniCamp - 1ª fase</span>
                        </div>
                    </div>
                </div>
                <div className={styles.subjects}>
                    <div className={styles.subjectList}>
                        <div className={`${styles.subject}`} style={{ backgroundColor: '#e57373' }}>MATEMÁTICA</div>
                        <div className={`${styles.subject}`} style={{ backgroundColor: '#f06292' }}>HISTÓRIA</div>
                        <div className={`${styles.subject}`} style={{ backgroundColor: '#ffb74d' }}>LÍNGUA PORTUGUESA</div>
                        <div className={`${styles.subject}`} style={{ backgroundColor: '#fff176' }}>INGLÊS</div>
                    </div>
                    <div className={styles.subjectList}>
                        <div className={`${styles.subject}`} style={{ backgroundColor: '#aed581' }}>FÍSICA</div>
                        <div className={`${styles.subject}`} style={{ backgroundColor: '#4db6ac' }}>QUÍMICA</div>
                        <div className={`${styles.subject}`} style={{ backgroundColor: '#64b5f6' }}>BIOLOGIA</div>
                        <div className={`${styles.subject}`} style={{ backgroundColor: '#9575cd' }}>GEOGRAFIA</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPage;