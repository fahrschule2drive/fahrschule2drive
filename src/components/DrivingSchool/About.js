import React, { useContext } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core';
import { LanguageContext } from '../../store/context/LanguageContext';
import { getLocaleValue } from '../../utils';

const useStyles = makeStyles(() => ({
  wrapper: {
    marginBottom: '50px',

    '@media screen and (min-width: 768px)': {
      borderRight: '1px solid var(--color-separator)',
      flex: '0 0 45.8%',
      margin: '0 40px 0 0',
      paddingRight: '40px',
    },

    '@media screen and (min-width: 992px)': {
      paddingRight: '70px',
      marginRight: '70px',
    },
  },
  image: {
    borderRadius: '10px',
    boxShadow: '0 10px 40px var(--color-shadow)',
    display: 'block',
    marginBottom: '40px',
    width: '100%',
  },
  article: {
    '& > p': {
      color: 'var(--color-secondary-text)',
      marginBottom: '22px',
    },
  },
}));

const About = () => {
  const languageStore = useContext(LanguageContext);

  const styles = useStyles();

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsDrivingSchool: drivingSchool,
      }) => (
        <div className={styles.wrapper}>
          <img src={drivingSchool.office.url} alt="office" className={styles.image} />
          <article
            className={styles.article}
            dangerouslySetInnerHTML={{
              __html: getLocaleValue({
                language: languageStore.store.language,
                locales: drivingSchool._allDescriptionLocales,
              }),
            }}
          />
        </div>
      )}
    />
  );
};

const query =
  graphql`
    query AboutQuery {
      datoCmsDrivingSchool(locale: {eq: "en"}) {
        office {
          url
        }
        _allDescriptionLocales {
          locale
          value
        }
      }
    }
  `;

export default About;
