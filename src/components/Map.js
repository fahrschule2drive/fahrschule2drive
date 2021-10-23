import React from 'react';

import Wrapper from './Wrapper';

// Styles
import './Map.scss';

const Map = () => {
  return (
    <section className="map">
      <Wrapper>
        Тут будет карта,просто пока её не видно
        <div className="form">
          <div className="form__title">Остались вопросы?</div>
          <div className="form__content">
            <input type="text" placeholder="Ваше имя"/>
            <input type="text" placeholder="Телефон"/>
            <textarea placeholder="Сообщение" />
          </div>
          <button className="cta cta--dark">Отправить</button>
        </div>
      </Wrapper>
    </section>
  );
}

export default Map;
