import React, { useContext } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Wrapper from './Wrapper';
import { getLocaleValue } from '../utils';
import { LanguageContext } from '../store/context/LanguageContext';

// Styles
import './ContactForm.scss';

const Map = () => {
  const languageStore = useContext(LanguageContext);

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsContactForm: contactForm
      }) => (
        <section className="contact-form overlay" id="contact-form" style={{ backgroundImage: `url(${contactForm.background.url})` }}>
          <Wrapper>
            <form action="https://getform.io/f/02779f4b-1ba6-4da5-8261-a9ed4e71890d" method="POST" className="form">
              <div className="form__title">
                {getLocaleValue({
                  language: languageStore.store.language,
                  locales: contactForm._allTitleLocales,
                })}
              </div>
              <div className="form__content">
                <input
                  type="text"
                  name="name"
                  placeholder={getLocaleValue({
                    language: languageStore.store.language,
                    locales: contactForm._allNameLocales,
                  })}
                />
                <input
                  type="email"
                  name="email"
                  placeholder={getLocaleValue({
                    language: languageStore.store.language,
                    locales: contactForm._allEmailLocales,
                  })}
                />
                <textarea
                  name="message"
                  placeholder={getLocaleValue({
                    language: languageStore.store.language,
                    locales: contactForm._allMessageLocales,
                  })}
                />
              </div>
              <button className="cta cta--dark" type="submit">
                {getLocaleValue({
                  language: languageStore.store.language,
                  locales: contactForm._allCtaTitleLocales,
                })}
              </button>
            </form>
          </Wrapper>
        </section>
      )}
    />
  );
};

const query =
  graphql`
    query ContactFormQuery {
      datoCmsContactForm(locale: {eq: "en"}) {
        _allEmailLocales {
          locale
          value
        }
        _allMessageLocales {
          locale
          value
        }
        _allNameLocales {
          locale
          value
        }
        _allTitleLocales {
          locale
          value
        }
        _allCtaTitleLocales {
          locale
          value
        }
        background {
          url
        }
      }
    }
  `;

export default Map;
