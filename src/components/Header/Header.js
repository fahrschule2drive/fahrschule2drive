import React from 'react';

// Components
import HeaderLanguage from './HeaderLanguage';
import Wrapper from '../Wrapper';

// Styles
import './Header.scss';

const Header = () => (
  <header className="header">
    <Wrapper>
      <div className="header__logo" />
      <nav className="nav">
        <a href="#info" className="nav__item">
          Info
        </a>
        <a href="#driving-school" className="nav__item">
          Fahreschule
        </a>
        <a href="#cars" className="nav__item">
          Fahrzeuge
        </a>
        <a href="#tutors" className="nav__item">
          Fahrlehrer
        </a>
        <a href="#prices" className="nav__item">
          Preise & Infos
        </a>
        <a href="#contact-form" className="nav__item">
          Kontakt
        </a>
      </nav>
      <HeaderLanguage />
    </Wrapper>
  </header>
);

export default Header;
