import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import Input from '../../components/Input';

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
               <form action="/" id="search-teachers">
                   <Input name="subject" label="Matéria"/>
                   <Input name="week_day" label="Dia da Semana"/>
                   <Input name="hora" label="Hora" type="time"/>
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