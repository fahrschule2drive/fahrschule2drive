import React, { Fragment, useContext, useState } from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

// Components
import HeaderLanguage from './HeaderLanguage';
import Wrapper from '../Wrapper';

// Styles
import './Header.scss';
import { getLocaleValue } from '../../utils';
import { LanguageContext } from '../../store/context/LanguageContext';

const navLinks = [
  'info',
  'cars',
  'tutors',
  'prices',
  'contact-form',
];

const Header = ({ type }) => {
  const languageStore = useContext(LanguageContext);
  const [isNavActive, setNavActivity] = useState(false);

  const handleMenuClick = () => {
    setNavActivity(!isNavActive);
  };

  const renderNavLinks = (header) => {
    return getLocaleValue({
      language: languageStore.store.language,
      locales: header._allHeaderNavLocales,
    }).map((item, index) => (
      <a
        href={`#${navLinks[index]}`}
        className="nav__item"
        key={index}
        onClick={handleMenuClick}
      >
        {item.headerItem}
      </a>
    ));
  };

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsHeader: header,
      }) => (
        <header className={`header ${type === 'dark' ? 'header--dark' : ''}`}>
          <Wrapper>
            <Link
              to='/'
              className="header__logo"
            />
            { type !== 'dark' && (
              <Fragment>
                <nav className={`nav ${isNavActive ? 'nav--active' : ''}`}>
                  {renderNavLinks(header)}
                </nav>
                <button
                  className={`header__menu-button ${isNavActive ? 'header__menu-button--active' : ''}`}
                  onClick={handleMenuClick}
                  role="button"
                >
                  <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="2" x2="20" y2="2" stroke="#ffffff" strokeWidth="3" className="line line--1"/>
                    <line x1="6" y1="18" x2="26" y2="18" stroke="#ffffff" strokeWidth="3" className="line line--3"/>
                    <line y1="10" x2="26" y2="10" stroke="#ffffff" strokeWidth="3" className="line line--2"/>
                  </svg>
                </button>
                <HeaderLanguage />
              </Fragment>
            )}
          </Wrapper>
        </header>
      )}
    />
  );
};

const query =
  graphql`
    query HeaderQuery {
      datoCmsHeader(locale: {eq: "en"}) {
        _allHeaderNavLocales {
          locale,
          value {
            headerItem
          }
        }
      }
    }
  `;

export default Header;
