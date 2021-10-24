import React from 'react';

// Components
// import Translate from '../utils/Translate';
import Wrapper from '../Wrapper';
import HeaderLanguage from "./HeaderLanguage";

// Styles
import './Header.scss';

const Header = () => (
  <header className="header">
    <Wrapper>
      <div className="header__logo" />
      <nav className="nav">
        <span className="nav__item">Home</span>
        <span className="nav__item">Führerschein</span>
        <span className="nav__item">Preise & Infos</span>
        <span className="nav__item">Über uns</span>
        <span className="nav__item">Kontakt</span>
      </nav>
      <HeaderLanguage />
      <button className="header__cta cta">Einschreiben</button>
    </Wrapper>
  </header>
);

export default Header;
