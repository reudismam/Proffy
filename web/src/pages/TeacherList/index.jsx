import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
               <form action="/" id="search-teachers">
                   <div className="input-block">
                       <label htmlFor="subject">Matéria</label>
                       <input type="text" id="subject">

                       </input>
                   </div>

                   <div className="input-block">
                       <label htmlFor="week_day">Dia da semana</label>
                       <input type="text" id="week_day">
                           
                       </input>
                   </div>

                   <div className="input-block">
                       <label htmlFor="hora">Hora</label>
                       <input type="text" id="hora">
                           
                       </input>
                   </div>

               </form>
            </PageHeader>
            <main>
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            </main>
        </div>
    );
}