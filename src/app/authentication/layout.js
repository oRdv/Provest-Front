'use client'

import Woman from '@/components/ui/WomanSection'
import styles from './layout.module.css';


const proLayout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Woman />
            <div className={styles['right-side']}>
                {children}
            </div>
        </div>
    )
}

export default proLayout;