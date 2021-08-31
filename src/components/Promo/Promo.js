import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core';

import Benefit from './Benefit';
import Wrapper from '../Wrapper';

import IconDE from '../../images/icons/flag-germany.svg';
import IconEN from '../../images/icons/flag-united-kingdom.svg';
import IconRU from '../../images/icons/flag-russia.svg';
import IconTU from '../../images/icons/flag-turkey.svg';
import Grid from '../Grid';

const useStyles = makeStyles(() => ({
  section: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '256px 0 60px',
    position: 'relative',

    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      background: 'var(--color-overlay)',
    },
  },
  wrapper: {
    position: 'relative',
    zIndex: 1,
  },
  title: {
    color: 'var(--color-white)',
    fontSize: '64px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  subtitle: {
    color: 'var(--color-white)',
    marginBottom: '46px',
  },
  description: {
    alignItems: 'center',
    color: 'var(--color-white)',
    display: 'flex',
    marginBottom: '140px',
  },
  price: {
    color: 'var(--color-white)',
    fontSize: '52px',
    fontWeight: '700',
    margin: '0 30px',
    position: 'relative',
    top: '-3px',
  },
  priceDetails: {
    color: 'var(--color-white)',
  },
  benefitItem: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  benefitImage: {
    marginBottom: '30px',
  },
  benefitDescription: {
    color: 'var(--color-white)',
    textAlign: 'center',
  },
  benefitLanguages: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '8px',
    '& > img': {
      display: 'block',
      width: '20px',
      height: '20px',
      margin: '0 6px',
    }
  },
}));

const Promo = () => {
  const styles = useStyles();

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsPromo: promo,
      }) => (
        <section
          className={styles.section}
          style={{ backgroundImage: `url(${promo.background.url})` }}
        >
          <Wrapper className={styles.wrapper}>
            <h1
              className={styles.title}
              dangerouslySetInnerHTML={{
                __html: promo.title
              }}
            />
            <p
              className={styles.subtitle}
              dangerouslySetInnerHTML={{
                __html: promo.subtitle
              }}
            />
            <div className={styles.description}>
              <button className="cta">
                Начать сейчас
              </button>
              <div className={styles.price}>
                {promo.price} €
              </div>
              <p
                className={styles.priceDetails}
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
                    <div className={styles.benefitLanguages}>
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
};

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
