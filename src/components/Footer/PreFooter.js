import React, { useContext } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Wrapper from '../Wrapper';
import { getLocaleValue } from '../../utils';

// Styles
import './PreFooter.scss';
import { LanguageContext } from '../../store/context/LanguageContext';

const PreFooter = () => {
  const languageStore = useContext(LanguageContext);

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsFooter: footer,
      }) => (
        <section className="pre-footer">
          <Wrapper>
          <span
            className="pre-footer__logo"
            style={{ backgroundImage: `url(${footer.logo.url})` }}
          />
            <div className="pre-footer__content">
              <address className="pre-footer__item pre-footer__item--address">
                <span className="pre-footer__title">
                  {getLocaleValue({
                    language: languageStore.store.language,
                    locales: footer._allAddressLocales,
                  })}
                </span>
                <a href="https://www.google.com/maps/place/Neue+Bahnhofstra%C3%9Fe+5,+10245+Berlin/@52.505331,13.4689149,17.5z/data=!4m5!3m4!1s0x47a84ef0dbcfa363:0x7714e55b01314e2c!8m2!3d52.505326!4d13.4697742" target="_blank" rel="noreferrer">
                  Neue Bahnhofstrasse 5, 10245 Berlin
                </a>
              </address>
              <div className="pre-footer__item pre-footer__item--phone">
                <span className="pre-footer__title">
                  {getLocaleValue({
                    language: languageStore.store.language,
                    locales: footer._allPhoneLocales,
                  })}
                </span>
                <a href="tel:+49302942923">+49 30 2942923</a>
              </div>
              <div className="pre-footer__item pre-footer__item--email">
                <span className="pre-footer__title">Email</span>
                <a href="mailto:fahrschule2drive@gmx.de">fahrschule2drive@gmx.de</a>
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
        logo {
          url
        }
        _allAddressLocales {
          value
          locale
        }
        _allPhoneLocales {
          value
          locale
        }
      }
    }
  `;

export default PreFooter;
