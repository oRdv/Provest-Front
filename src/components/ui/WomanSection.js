import styles from './WomanSection.module.css';
import Image from 'next/image'; 

const WomanSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles['left-side']}>
                <div className={styles.provest}>
                    <h1>ProVest</h1>
                </div>
                <div className={styles.illustration}>
                    <Image
                        src="/img/female.png"
                        width={360}
                        height={300}
                        alt="Desenho de uma mulher pensando"
                    />
                </div>
            </div>
        </div>
    )

}

export default WomanSection