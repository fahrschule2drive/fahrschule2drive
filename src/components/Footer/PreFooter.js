import React, { useContext } from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

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
        datoCmsPreFooter: preFooter,
      }) => (
        <section className="pre-footer">
          <Wrapper>
            <Link
              to='/'
              className="pre-footer__logo"
              style={{ backgroundImage: `url(${preFooter.logo.url})` }}
            />
            <div className="pre-footer__content">
              <address className="pre-footer__item pre-footer__item--address">
                <span className="pre-footer__title">
                  Fahrschule 2Drive Ostkreuz
                </span>
                <a href="https://www.google.com/maps/place/Neue+Bahnhofstra%C3%9Fe+5,+10245+Berlin/@52.505331,13.4689149,17.5z/data=!4m5!3m4!1s0x47a84ef0dbcfa363:0x7714e55b01314e2c!8m2!3d52.505326!4d13.4697742" target="_blank" rel="noreferrer">
                  Neue Bahnhofstrasse 5, 10245 Berlin
                </a>
                <span className="pre-footer__title">
                  Fahrschule 2Drive Lichtenberg
                </span>
                <a href="https://www.google.com/maps/place/Irenenstra%C3%9Fe+21A,+10317+Berlin/@52.5095265,13.4980346,17z/data=!3m1!4b1!4m5!3m4!1s0x47a84ec0bcf21a59:0x2bba97672e59bbd!8m2!3d52.5095233!4d13.5002232" target="_blank" rel="noreferrer">
                  Irenenstraße 21A, 10317 Berlin
                </a>
              </address>
              <div className="pre-footer__item pre-footer__item--phone">
                <span className="pre-footer__title">
                  {getLocaleValue({
                    language: languageStore.store.language,
                    locales: preFooter._allPhoneLocales,
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
    query PreFooterQuery {
      datoCmsPreFooter {
        logo {
          url
        }
        _allPhoneLocales {
          value
          locale
        }
      }
    }
  `;

export default PreFooter;
