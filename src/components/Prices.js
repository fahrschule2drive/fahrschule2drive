import classnames from 'classnames';
import React, { useContext } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Grid from './Grid';
import Wrapper from './Wrapper';
import { getLocaleValue } from '../utils';
import { LanguageContext } from '../store/context/LanguageContext';

// Styles
import './Prices.scss';

const Prices = () => {
  const languageStore = useContext(LanguageContext);

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsPrice: price,
      }) => (
        <section
          className="prices"
          id="prices"
          style={{ backgroundImage: `url(${price.background.url})` }}
        >
          <Wrapper>
            <div className="section-header">
              <div className="section-header__icon section-header__icon--tutors" style={{ backgroundImage: `url(${price.icon.url})` }}/>
              <h2 className="section-header__title">
                {getLocaleValue({
                  language: languageStore.store.language,
                  locales: price._allTitleLocales,
                })}
              </h2>
            </div>
            <Grid columns={3}>
              {getLocaleValue({
                language: languageStore.store.language,
                locales: price._allPricesLocales,
              }).map((item, index) => (
                <div className={classnames('card', {
                  'card--wide': index === 6,
                })} key={item.id}>
                  <div className="card__title">
                    {item.title}
                  </div>
                  <div className="card__price">
                    {item.price}
                  </div>
                  {item.subtitle && (
                    <p className="card__description">
                      {item.subtitle}
                    </p>
                  )}
                  <ul className="card__list">
                    {item.pricePoints.map(point => (
                      <li key={point.id}>
                        {point.pricePoint}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Grid>
          </Wrapper>
        </section>
      )}
    />
  );
};

const query =
  graphql`
    query PriceQuery {
      datoCmsPrice(locale: {eq: "en"}) {
        background {
          url
        }
        icon {
          url
        }
        _allTitleLocales {
          value
          locale
        }
        _allPricesLocales {
          locale
          value {
            id
            price
            title
            subtitle
            pricePoints {
              id
              pricePoint
            }
          }
        }
      }
    }
  `;

export default Prices;
