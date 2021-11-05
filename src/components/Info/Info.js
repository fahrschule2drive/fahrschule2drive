import React, { useContext } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core';

import Wrapper from '../Wrapper';
import InfoItem from './InfoItem';
import Grid from '../Grid';
import { LanguageContext } from '../../store/context/LanguageContext';
import { getLocaleValue } from '../../utils';

const useStyles = makeStyles(() => ({
  wrapper: {
    padding: '60px 30px 50px',

    '@media screen and (min-width: 992px)': {
      paddingBottom: '50px',
      paddingTop: '60px',
    },
  },
}));

const Info = () => {
  const languageStore = useContext(LanguageContext);
  const styles = useStyles();

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsInfo: info,
      }) => (
        <Wrapper className={styles.wrapper}>
          <Grid columns={3}>
            {getLocaleValue({
              language: languageStore.store.language,
              locales: info._allInfoListLocales,
            }).map((item, index) => (
              <InfoItem
                data={item}
                index={index}
                key={item.id}
              />
            ))}
          </Grid>
        </Wrapper>
      )}
    />
  );
};

const query =
  graphql`
    query InfoQuery {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      datoCmsInfo(locale: {eq: "en"}) {
        _allInfoListLocales {
          locale
          value {
            description
            id
            title
          }
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

export default Info;
