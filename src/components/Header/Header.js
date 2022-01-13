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
      {/*<nav className="nav">*/}
      {/*  <span className="nav__item">Home</span>*/}
      {/*  <span className="nav__item">Führerschein</span>*/}
      {/*  <span className="nav__item">Preise & Infos</span>*/}
      {/*  <span className="nav__item">Über uns</span>*/}
      {/*  <span className="nav__item">Kontakt</span>*/}
      {/*</nav>*/}
      <HeaderLanguage />
    </Wrapper>
  </header>
);

export default Header;
