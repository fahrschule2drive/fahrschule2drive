import React, { useContext } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Benefit from './Benefit';
import Grid from '../Grid';
import Wrapper from '../Wrapper';
import { getLocaleValue } from '../../utils';
import { LanguageContext } from '../../store/context/LanguageContext';

import './Promo.scss';

// import IconDE from '../../images/icons/flag-germany.svg';
// import IconEN from '../../images/icons/flag-united-kingdom.svg';
// import IconRU from '../../images/icons/flag-russia.svg';
// import IconTU from '../../images/icons/flag-turkey.svg';

const Promo = () => {
  const languageStore = useContext(LanguageContext);

  return (
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
                __html: getLocaleValue({
                  language: languageStore.store.language,
                  locales: promo._allTitleLocales,
                })
              }}
            />
            <p
              className="promo__subtitle"
              dangerouslySetInnerHTML={{
                __html: getLocaleValue({
                  language: languageStore.store.language,
                  locales: promo._allSubtitleLocales,
                })
              }}
            />
            <div className="promo__description">
              <a href="#driving-school" className="cta">
                {getLocaleValue({
                  language: languageStore.store.language,
                  locales: promo._allAnchorTitleLocales,
                })}
              </a>
            </div>
            <Grid columns={4}>
              {getLocaleValue({
                language: languageStore.store.language,
                locales: promo._allBenefitsLocales,
              }).map((benefit, index) => (
                <Benefit key={benefit.id} benefit={benefit} locales={promo._allBenefitsLocales}>
                  {!index && (
                    <div className="promo__languages">
                      {/* <img src={IconDE} alt="german"/>
                      <img src={IconEN} alt="english"/>
                      <img src={IconTU} alt="turkish"/>
                      <img src={IconRU} alt="russian"/> */}
                      <span className='promo__language'>DE</span>
                      <span className='promo__language'>EN</span>
                      <span className='promo__language'>TU</span>
                      <span className='promo__language'>RU</span>
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
}

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
        _allTitleLocales {
          locale
          value
        }
        _allSubtitleLocales {
          locale
          value
        }
        _allAnchorTitleLocales {
          locale
          value
        }
        _allBenefitsLocales {
          locale
          value {
            icon {
              url
            }
            id
            title
          }
        }
        background {
          url
        }
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
