
import React from 'react';
import styles from './page.module.css';

export default function Home() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          Matematica
        </header>
        <div className={styles.title}>
        <p>
            Alternativa correta: b) A ⊆ B.
          </p>          
        </div>
        <main className={styles.content}>
          <img 
            alt="Diagrama de Venn mostrando que o conjunto A está contido no conjunto B" 
            height="200" 
            src="https://storage.googleapis.com/a1aa/image/AZo7HBF45d6IGpuDzFgcP0aQqsf9yCTeA7FVkvnzc9N0xNzTA.jpg" 
            width="300" 
          />
        </main>
        <div className={styles.resposta}>
        <p>
            b) CORRETA. Observe que todos os elementos de A também são elementos de B. Portanto, podemos dizer que A está contido em B, A é parte de B ou que A é um subconjunto de B.
          </p>
        </div>
      </div>
    );
  }
  
