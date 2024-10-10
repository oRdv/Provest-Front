import React from 'react';
import styles from './page.module.css';

function Submateria() {
    return(
        <>
        <title>Geografia</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    
    <div className={styles.header}>
        <i className={`fas fa-arrow-left ${styles.backButton}`}></i>
        GEOGRAFIA
    </div>
    <div className={styles.content}>
        <a href="#" className={styles.item}>
            <div className={styles.itemText}>Geografia - Geopolítica</div>
            <div className={styles.itemIcon}><i className="fas fa-chevron-right"></i></div>
        </a>
        <a href="#" className={styles.item}>
            <div className={styles.itemText}>Geografia - Climas</div>
            <div className={styles.itemIcon}><i className="fas fa-chevron-right"></i></div>
        </a>
        <a href="#" className={styles.item}>
            <div className={styles.itemText}>Geografia - Solos</div>
            <div className={styles.itemIcon}><i className="fas fa-chevron-right"></i></div>
        </a>
        <a href="#" className={styles.item}>
            <div className={styles.itemText}>Geografia - Domínios</div>
            <div className={styles.itemIcon}><i className="fas fa-chevron-right"></i></div>
        </a>
        <a href="#" className={styles.item}>
            <div className={styles.itemText}>Geografia - Domínios</div>
            <div className={styles.itemIcon}><i className="fas fa-chevron-right"></i></div>
        </a>
    </div>
        </>
    )
}
export default Submateria;
