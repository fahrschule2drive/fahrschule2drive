import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Benefit from './Benefit';
import Wrapper from '../Wrapper';
import Grid from '../Grid';

import './Promo.scss';

import IconDE from '../../images/icons/flag-germany.svg';
import IconEN from '../../images/icons/flag-united-kingdom.svg';
import IconRU from '../../images/icons/flag-russia.svg';
import IconTU from '../../images/icons/flag-turkey.svg';

const Promo = () => (
  <StaticQuery
    query={query}
    render={({
      datoCmsPromo: promo,
    }) => (
      <section
        className="promo"
        style={{ backgroundImage: `url(${promo.background.url})` }}
      >
        <Wrapper>
          <h1
            className="promo__title"
            dangerouslySetInnerHTML={{
              __html: promo.title
            }}
          />
          <p
            className="promo__subtitle"
            dangerouslySetInnerHTML={{
              __html: promo.subtitle
            }}
          />
          <div className="promo__description">
            <button className="cta">
              Начать сейчас
            </button>
            <div className="promo__price">
              {promo.price} €
            </div>
            <p
              className="promo__price-details"
              dangerouslySetInnerHTML={{
                __html: promo.priceDescription
              }}
            />
          </div>
          {promo.benefits.length}
          <Grid columns={4}>
            {promo.benefits.map((benefit, index) => (
              <Benefit key={benefit.id} benefit={benefit}>
                {!index && (
                  <div className="promo__languages">
                    <img src={IconDE} alt="german"/>
                    <img src={IconEN} alt="english"/>
                    <img src={IconTU} alt="turkish"/>
                    <img src={IconRU} alt="russian"/>
                  </div>
                )}
              </Benefit>
            ))}
          </Grid>
        </Wrapper>
      </section>
    )}
  />
);

const query =
  graphql`
    query PromoQuery {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      datoCmsPromo(locale: {eq: "en"}) {
        background {
          url
        }
        benefits {
          icon {
            url
          }
          id
          title
        }
        price
        priceDescription
        subtitle
        title
      }
      allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
        edges {
          node {
            profileType
            url
          }
        }
      }
    }
  `;

export default Promo;
