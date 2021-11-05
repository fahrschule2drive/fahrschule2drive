import React, { useContext, useState } from 'react';

// Components
// import { store } from '../context/LanguageContext';

// Styles
import './HeaderLanguage.scss';
import IconDeFlag from '../../images/icons/flag-germany.svg';
import IconUkFlag from '../../images/icons/flag-united-kingdom.svg';
import IconRuFlag from '../../images/icons/flag-russia.svg';
import { LanguageContext } from '../../store/context/LanguageContext';
import { SET_LANGUAGE } from '../../store/actions';

const languagesData = [{
  abbr: 'de',
  icon: IconDeFlag,
  alt: 'germany flag',
}, {
  abbr: 'en',
  icon: IconUkFlag,
  alt: 'united kingdom flag',
}, {
  abbr: 'ru',
  icon: IconRuFlag,
  alt: 'russia flag',
}]

const Header = () => {
  const languageStore = useContext(LanguageContext);

  const [isActive, setActivity] = useState(false);
  const [languages, setLanguages] = useState(languagesData);

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
    if (languageStore.store.language === language) {
      setActivity(!isActive);
    } else {
      languageStore.dispatch({
        type: SET_LANGUAGE,
        payload: {
          language,
        },
      });
      setLanguages(sortLanguages(language));
      setActivity(false);
    }
  };

  return (
    <div className={`header-language__wrapper ${isActive ? 'header-language__wrapper--active' : ''}`}>
      {languages.map((item, index) => (
        <button className="header-language__item" onClick={handleLanguageClick(item.abbr)} key={index}>
          <img src={item.icon} alt={item.alt} className={`header-language__icon header-language__icon--${item.abbr}`}/>
        </button>
      ))}
    </div>
  );
}

export default Header;
