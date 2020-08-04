import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherItem() {
  return(
  <article className="teacher-item">
    <header>
      <img src="https://image.freepik.com/free-vector/young-teacher-standing-front-blank-school-blackboard_88272-1070.jpg" alt="Diego" />
      <div>
        <strong>Diego Pereira</strong>
        <span>Quimica</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de química avançada.
<br />
Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
</p>

    <footer>
      <p>
        Valor/hora
   <strong>R$ 80,00</strong>
      </p>

      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
    Entrar em contato
  </button>
    </footer>

  </article>
  )
}

export default TeacherItem;
