import React from 'react';
import styles from './page.module.css';

function politicaPriv() {
    return (
        <div className="container">
            <div className={styles.title}>
                <h1>POLÍTICA E PRIVACIDADE</h1>
            </div>

            <div className={styles.containerConteudo}>
            <div className={styles.conteudo}>
                <div className={styles.textBlock}>
                <div className={styles.invi}>
                   <h2>Introdução</h2>
                    </div>
                    <p>
                    A presente Política de Privacidade estabelece as diretrizes para a 
                    coleta, uso, armazenamento e compartilhamento de informações pessoais 
                    dos usuários do aplicativo Provest, que tem como finalidade auxiliar
                     os usuários napreparação para vestibulares.
                    </p>
                </div>
                <div className={styles.textBlock}>
                    <h2>Informações que coletamos</h2>
                    <p>
                    Nome, 
                    E-mail, 
                    Número de telefone, 
                    Dados de perfil (por exemplo, preferências de estudo, áreas de interesse), 
                    Informações de pagamento (se aplicável).
                    </p>
                </div>
                <div className={styles.textBlock}>
                    <h2>Armazenamento e segurança</h2>
                    <p>
                    Tomamos medidas razoáveis para proteger suas informações pessoais
                     contra acesso não autorizado, uso ou divulgação. Contudo, nenhuma 
                     transmissão pela internet ou armazenamento eletrônico é 100% seguro. 
                     Não podemos garantir a segurança absoluta das informações que você nos fornece.
                    </p>
                </div>
            </div>

            <div className={styles.conteudo}>
                <div className={styles.textBlock}>
                    <h2>Uso das informações</h2>
                    <p>  
                    Criar e gerenciar sua conta no Aplicativo; 
                    Oferecer conteúdos personalizados; 
                    Enviar notificações sobre atualizações;
                    Atender a solicitações de suporte ao cliente; 
                    Cumprir obrigações legais e regulatórias;
                    </p>
                </div>
                <div className={styles.textBlock}>
                    <h2>Seus direitos</h2>
                    <p>
                    Acessar as informações que temos sobre você; 
                    Solicitar a correção de informações imprecisas;  
                    Solicitar a exclusão de suas informações; 
                    Retirar seu consentimento para o uso de suas informações pessoais (quando aplicável).
                    </p>
                </div>
               
            </div>
            </div>
        </div>
    );
}

export default politicaPriv;