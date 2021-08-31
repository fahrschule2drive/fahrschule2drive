import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core';

import Wrapper from '../Wrapper';
import InfoItem from './InfoItem';
import Grid from '../Grid';

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
  const styles = useStyles();

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsInfo: info,
      }) => (
        <Wrapper className={styles.wrapper}>
          <Grid columns={3}>
            {info.infoList.map((item, index) => (
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
        infoList {
          description
          id
          title
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
