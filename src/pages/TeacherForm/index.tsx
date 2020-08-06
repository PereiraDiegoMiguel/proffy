import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';

function TeacherForm() {
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
          <Input name="subject" label="Matéria"></Input>
          <Input name="cost" label="Seu custo por aula"></Input>
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