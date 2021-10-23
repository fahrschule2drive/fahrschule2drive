import React from 'react';

import Wrapper from './Wrapper';

import IconExam from '../images/icons/exam.svg';

// Styles
import './Exam.scss';

const Exam = () => (
  <section className="exam overlay">
    <Wrapper>
      <div className="section-header">
        <div className="section-header__icon section-header__icon--tutors" style={{ backgroundImage: `url(${IconExam})` }}/>
        <h2 className="section-header__title">Поможем сдать экзамен</h2>
      </div>
      <div className="exam__description">
        <p>Водительское удостоверение означает свободу. Спонтанные поездки с друзьями или семьей, поездки на выходные с партнером или покупки с лучшим другом в дешевом аутлет-центре на улице.</p>
        <p>Мы хотим сопровождать вас на пути в мобильное будущее. Наши специалисты по вождению - это ваши теоретические и практические контакты, которые в игровой форме проведут вас через экзамены в кратчайшие сроки.</p>
        <p>Мы всегда готовы ответить на любые ваши вопросы и с нетерпением ждем вашего визита в нашу автошколу. Вы можете записаться на консультацию здесь.</p>
      </div>
      <div className="center">
        <button className="cta">Начать сейчас</button>
      </div>
    </Wrapper>
  </section>
);

export default Exam;
