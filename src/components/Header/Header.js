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
        <a href="#driving-school" className="nav__item">
          Führerschein
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
