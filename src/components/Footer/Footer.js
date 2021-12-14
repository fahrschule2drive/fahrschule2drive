import React, { useContext } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Wrapper from '../Wrapper';
import { LanguageContext } from '../../store/context/LanguageContext';

// Styles
import './Footer.scss';
import { getLocaleValue } from '../../utils';

const Footer = () => {
  const languageStore = useContext(LanguageContext);

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsFooter: footer,
      }) => (
        <section className="footer">
          <Wrapper>
            <div className="working-hours">
              <div className="footer__title footer__title--working-hours">
                {getLocaleValue({
                  language: languageStore.store.language,
                  locales: footer._allTitleLocales,
                })}
              </div>
              <table className="working-hours__list">
                <tbody>
                  {getLocaleValue({
                    language: languageStore.store.language,
                    locales: footer._allWorkinghoursLocales,
                  }).map(item => (
                    <tr key={item.id}>
                      <td>{item.day}</td>
                      <td>{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="footer__details">
              <div className="app">
                <div className="footer__title footer__title--app">
                  {getLocaleValue({
                    language: languageStore.store.language,
                    locales: footer._allMobileTitleLocales,
                  })}
                </div>
                <p>
                  {getLocaleValue({
                    language: languageStore.store.language,
                    locales: footer._allMobileDescriptionLocales,
                  })}
                </p>
              </div>
              <div className="kfz">
                <div className="footer__title footer__title--kfz">
                  {getLocaleValue({
                    language: languageStore.store.language,
                    locales: footer._allKfzTitleLocales,
                  })}
                </div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: getLocaleValue({
                      language: languageStore.store.language,
                      locales: footer._allKfzDescriptionLocales,
                    })
                  }}
                />
              </div>
            </div>
          </Wrapper>
        </section>
      )}
    />
  );
}

const query =
  graphql`
    query FooterQuery {
      datoCmsFooter {
        _allTitleLocales {
          locale
          value
        }
        _allWorkinghoursLocales {
          locale
          value {
            day
            id
            time
          }
        }
        _allMobileDescriptionLocales {
          locale
          value
        }
        _allMobileTitleLocales {
          locale
          value
        }
        _allKfzDescriptionLocales {
          locale
          value
        }
        _allKfzTitleLocales {
          locale
          value
        }
      }
    }
  `;

export default Footer;
