import React from 'react';

// Styles
import './Footer.scss';
import Wrapper from '../Wrapper';

const Footer = () => (
  <section className="footer">
    <Wrapper>
      <div className="working-hours">
        <div className="footer__title footer__title--working-hours">Unsere Öffnungszeiten</div>
        <table className="working-hours__list">
          <tbody>
          <tr>
            <td>Montag</td>
            <td>11-18 Uhr</td>
          </tr>
          <tr>
            <td>Dienstag</td>
            <td>11-18 Uhr</td>
          </tr>
          <tr>
            <td>Mittwoch</td>
            <td>nach Termin</td>
          </tr>
          <tr>
            <td>Donnerstag</td>
            <td>11-18 Uhr</td>
          </tr>
          <tr>
            <td>Freitag</td>
            <td>10-16 Uhr</td>
          </tr>
          <tr>
            <td>Samstag</td>
            <td>Geschlossen</td>
          </tr>
          <tr>
            <td>Sonntag</td>
            <td>Geschlossen</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="footer__details">
        <div className="app">
          <div className="footer__title footer__title--app">Мобильное приложение</div>
          <p>
            Благодаря приложению Learn to Drive вы можете повторить все, что вы узнали онлайн, дома и подготовиться к тесту теории.
          </p>
        </div>
        <div className="kfz">
          <div className="footer__title footer__title--kfz">KFZ-Gutachten</div>
          <p>
            Übrigens machen wir auch KFZ-Gutachten:<br/>
            <b>Yunus Kalan</b>&nbsp;
            <a href="tel:+49302942923">+49 30 2942923</a> oder <a href="tel:+491633705199">+49 163 3705199</a>
          </p>
        </div>
      </div>
    </Wrapper>
  </section>
);

export default Footer;
