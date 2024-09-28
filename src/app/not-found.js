import React from "react";
import styles from './not-found.module.css';
import Image from 'next/image';
import Link from 'next/link';

function NotFound() {
    return (
        
        <div className={styles.pro}>

            <Image
                src="/img/logo-verde.png"
                width={90}
                height={87}
                alt="Desenho de uma mulher pensando"
            />
            
        <div className={styles.container}>
                <h1 className={styles.text}>PÁGINA EM CONSTRUÇÃO!</h1>
                <p className={styles.text}>EXPLORE OUTRAS ÁREAS DO</p>
                <p className={styles.text}> NOSSO APLICATIVO.</p>
                <div className={styles.buttons}>

                    <Image
                        src="/img/confuso.png"
                        width={360}
                        height={300}
                        alt="Desenho de uma mulher pensando"
                    />
                </div>

                <Link href="/" legacyBehavior>
                    <span className={styles.button}>HOME</span>
                </Link>
                <Link href="/profile" legacyBehavior>
                    <span className={styles.button}>MEU CRONOGRAMA</span>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;


