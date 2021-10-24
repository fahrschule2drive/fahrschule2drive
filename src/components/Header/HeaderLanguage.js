import React, { useContext, useState } from 'react';

// Components
// import { store } from '../context/LanguageContext';

// Styles
import './HeaderLanguage.scss';
import IconDeFlag from '../../images/icons/flag-germany.svg';
import IconUkFlag from '../../images/icons/flag-united-kingdom.svg';
import IconRuFlag from '../../images/icons/flag-russia.svg';

const languagesData = [{
  abbr: 'DE',
  icon: IconDeFlag,
  alt: 'germany flag',
}, {
  abbr: 'EN',
  icon: IconUkFlag,
  alt: 'united kingdom flag',
}, {
  abbr: 'RU',
  icon: IconRuFlag,
  alt: 'russia flag',
}]

const Header = () => {
  const [isActive, setActivity] = useState(false);
  const [languages, setLanguages] = useState(languagesData);

  // context
  // const globalState = useContext(store);
  // const { dispatch } = globalState;

  const searchLanguage = (language, arrayItem) => arrayItem.abbr === language;

  const moveArrayItem = (from, to) => {
    languages.splice(to, 0, languages.splice(from, 1)[0]);
  };

  const sortLanguages = (language) => {
    const currentLanguageIndex = languages.findIndex(item => searchLanguage(language, item));

    moveArrayItem(currentLanguageIndex, 0);

    return languages;
  };

  const handleLanguageClick = language => () => {
    // if (globalState.state === language) {
    //   setActivity(!isActive);
    // } else {
    //   dispatch({ type: 'action description', language });
    //   setLanguages(sortLanguages(language))
    //   setActivity(false);
    // }
  };

  return (
    <div className={`header-language__wrapper ${isActive ? 'header-language__wrapper--active' : ''}`}>
      {languages.map((item, index) => (
        <button className="header-language__item" onClick={handleLanguageClick(item.abbr)} key={index}>
          <img src={item.icon} alt={item.alt} className={`header-language__icon header-language__icon--${item.abbr.toLowerCase()}`}/>
        </button>
      ))}
    </div>
  );
}

export default Header;
