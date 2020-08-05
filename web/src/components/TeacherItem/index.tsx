import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

export default function TeacherItem() {
    return (
            <article className="teacher-item">
                <header>
                    <img src="https://picsum.photos/200/300" alt="Foto de perfil" />
                    <div>
                        <strong>Paulo Macedo Lima</strong>
                        <span>Matemática</span>
                    </div>
                </header>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eos exercitationem facilis dolore debitis velit modi optio odit natus architecto ea totam neque atque, possimus dolorem nesciunt nostrum similique quisquam.
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestias atque quasi. Facere asperiores eaque quod maiores et perferendis alias, tempora atque sed reiciendis dolores quae quidem, unde, cumque illum.
    </p>

                <footer>
                    <p>
                        Preço/hora
            <strong>R$ 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
        </button>
                </footer>
            </article>
    );
}