import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {

  const [schedulerItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...schedulerItems,
      {
        week_day: 0,
        from: '',
        to: ''
      }
    ]);
  }


  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>

        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo"></Input>
          <Input name="name" label="Avatar"></Input>
          <Input name="name" label="Whatsapp"></Input>

          <Textarea name="bio" label="Biografia" />

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
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

          <Input name="cost" label="Seu custo por aula"></Input>
        </fieldset>

        <fieldset>
          <legend> Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
          </legend>

          {schedulerItems.map(scheduleItem => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">

                <Select
                  name="week_day"
                  label="Dia da semana"
                  options={[
                    { value: '1', label: 'Domingo' },
                    { value: '2', label: 'Segunda-feira' },
                    { value: '3', label: 'Terça-feira' },
                    { value: '4', label: 'Quarta-feira' },
                    { value: '5', label: 'Quinta-feira' },
                    { value: '6', label: 'Sexta-feira' },
                    { value: '7', label: 'Sábado' },
                  ]}
                />

                <Input type="time" name="from" label="Das" />
                <Input type="time" name="to" label="Até" />

              </div>
            )
          })}

        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
          Importante! <br />
          Preencha todos os dados
          </p>

          <button type="button">
            Salvar cadastro
          </button>
        </footer>

      </main>
    </div>
  )
}

export default TeacherForm;