import React from 'react';

import Wrapper from './Wrapper';
import Grid from './Grid';

// Styles
import './Prices.scss';

// Images
import IconPrices from '../images/icons/prices.svg';

const Prices = () => (
  <section className="prices">
    <Wrapper>
      <div className="section-header">
        <div className="section-header__icon section-header__icon--tutors" style={{ backgroundImage: `url(${IconPrices})` }}/>
        <div className="section-header__subtitle">Цены</div>
        <h2 className="section-header__title">Тарифы</h2>
      </div>
      <Grid columns={3}>
        <div className="card">
          <div className="card__title">Уроки вождения</div>
          <div className="card__price">72 €</div>
          <ul className="card__list">
            <li>Стандартная тренировочная поездка занимает 80 минут и стоит 72 €.</li>
            <li>Час езды по 45 минут стоит 40,50 €.</li>
            <li>45-минутная инструкция на автомобиле стоит 40,50 €.</li>
          </ul>
        </div>
        <div className="card">
          <div className="card__title">Регистрация</div>
          <div className="card__price">72 €</div>
          <p className="card__description">
            Чтобы начать обучение вождению, вам необходимо зарегистрироваться в нашей автошколе.
          </p>
          <ul className="card__list">
            <li>Регистрация в автошколе</li>
            <li>14 теоретических занятий</li>
            <li>Частные уроки доступны по запросу</li>
          </ul>
        </div>
        <div className="card">
          <div className="card__title">Презентация практического экзамена</div>
          <div className="card__price">72 €</div>
          <ul className="card__list">
            <li>Вступительный взнос за практический экзамен (полный) стоит 95 евро.</li>
            <li>В зависимости от испытательного центра, дополнительный час вождения составляет от 40 до 60 минут.</li>
          </ul>
        </div>
        <div className="card">
          <div className="card__title">Вождение по шоссе</div>
          <div className="card__price">72 €</div>
          <p className="card__description">
            Езда по автомагистрали - одна из обязательных поездок.
          </p>
          <ul className="card__list">
            <li>Его продолжительность составляет 4 x 45 (180) минут плюс 40 минут прибытия и отъезда до автомагистрали.</li>
          </ul>
        </div>
        <div className="card">
          <div className="card__title">Ночная поездка</div>
          <div className="card__price">72 €</div>
          <p className="card__description">
            Ночная поездка - это особый час вождения в сумерках и в темноте.
          </p>
          <ul className="card__list">
            <li>Здесь мы едем 3 х 45 (135) минут.</li>
          </ul>
        </div>
        <div className="card">
          <div className="card__title">Путешествие по суше</div>
          <div className="card__price">72 €</div>
          <p className="card__description">
            При движении по суше мы берем на себя управление по федеральным или проселочным дорогам, а также через небольшие города.
          </p>
          <ul className="card__list">
            <li>Завершено 5 x 45 (225) минут. </li>
          </ul>
        </div>
        <div className="card card--wide">
          <div className="card__title">Специальные учебные поездки</div>
          <div className="card__price">72 €</div>
          <p className="card__description">
            Специальные тренировочные поездки продолжительностью 45 минут каждая стоят 45 евро, их еще называют специальными поездками.
          </p>
          <Grid columns={3}>
            <ul className="card__list">
              <li>5 единиц на федеральных или проселочных дорогах по 45 евро каждая</li>
            </ul>
            <ul className="card__list">
              <li>4 квартиры на трассе по 45 € каждая</li>
            </ul>
            <ul className="card__list">
              <li>3 единицы в сумерках и ночью по 45 евро каждая</li>
            </ul>
          </Grid>
        </div>
      </Grid>
    </Wrapper>
  </section>
);

export default Prices;
