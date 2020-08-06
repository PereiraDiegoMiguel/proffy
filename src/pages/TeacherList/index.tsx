import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItems';
import Input from '../../components/Input';
import Select from '../../components/Select';
import './styles.css'


function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">

        <form id="search-teachers">
        <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Quimica', label: 'Quimica' },
            ]}
          />
           <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: '1', label: 'Domingo' },
              { value: '2', label: 'Segunda-feira' },
              { value: '3', label: 'Terça-feira' },
              { value: '4', label: 'Quarta-feira' },
              { value: '5', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input name="time" type="time" label="Hora" />
        </form>

      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>

    </div>
  )
}

export default TeacherList;