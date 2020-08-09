import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/2229512?s=460&u=4798ce5b920f9f7f44ee29a4e2f0c46b23363129&v=4" alt="Carlos Krueger" />
                <strong>Carlos Krueger</strong>
                <span>Grafos</span>
            </header>
            <p>
                Descrição
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;