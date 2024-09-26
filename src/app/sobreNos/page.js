import React from 'react';
import styles from './page.module.css';

function sobreNos() {
    return (
        <div className="container">
            <div className={styles.title}>
                <h1>SOBRE NÓS</h1>
            </div>

            <div className={styles.containerConteudo}>
            <div className={styles.conteudo}>
                <div className={styles.textBlock}>
                <div className={styles.invi}>
                   <h2>Quem somos?</h2>
                    </div>
                    <p>
                        Bem-vindo ao ProVest, a plataforma inovadora projetada para
                        transformar a maneira como estudantes e professores se
                        organizam e gerenciam o estudo para vestibulares e exames!
                        Nossa missão é simplificar o processo de preparação, oferecendo
                        ferramentas eficazes e suporte personalizado para garantir que
                        cada aluno atinja seu máximo potencial.
                    </p>
                </div>
                <div className={styles.textBlock}>
                    <h2>Quem somos?</h2>
                    <p>
                        Somos uma equipe apaixonada por educação e tecnologia, formada
                        por especialistas em pedagogia, desenvolvimento de software e
                        psicologia educacional. Nossa experiência e entusiasmo nos
                        impulsionam a criar soluções que atendam às reais necessidades
                        de estudantes e educadores.
                    </p>
                </div>
            </div>

            <div className={styles.conteudo}>
                <div className={styles.textBlock}>
                    <h2>Nossa visão</h2>
                    <p>
                        Acreditamos que a organização eficiente é a chave para o sucesso
                        acadêmico. Queremos empoderar vestibulandos e professores com
                        um aplicativo que não apenas auxilie na criação de planos de
                        estudo detalhados, mas também promova hábitos de estudo
                        saudáveis e produtivos.
                    </p>
                </div>
                <div className={styles.textBlock}>
                    <h2>Nosso compromisso</h2>
                    <p>
                        Estamos comprometidos com a excelência e com a melhoria
                        contínua do nosso aplicativo. Feedback dos usuários é
                        fundamental para nós, e estamos sempre atentos às suas sugestões
                        para aprimorar nossa plataforma e garantir que ela atenda às suas
                        expectativas e necessidades. Junte-se a nós nessa jornada para
                        alcançar o sucesso nos vestibulares com confiança e
                        organização. No ProVest, seu futuro acadêmico começa aqui!
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default sobreNos;