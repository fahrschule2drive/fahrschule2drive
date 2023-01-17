import React, { useContext } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Wrapper from '../Wrapper';
import InfoItem from './InfoItem';
import Grid from '../Grid';
import { LanguageContext } from '../../store/context/LanguageContext';
import { getLocaleValue } from '../../utils';

import './Info.scss';

const Info = () => {
  const languageStore = useContext(LanguageContext);

  const renderInfoItems = (info) => {
    const items = getLocaleValue({
      language: languageStore.store.language,
      locales: info._allInfoListLocales,
    });

    return (
      <Grid columns={items.length}>
        {items.map((item, index) => (
          <InfoItem
            data={item}
            index={index}
            key={item.id}
          />
        ))}
      </Grid>
    );
  };

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsInfo: info,
      }) => (
        <Wrapper className="info" id="info">
          {renderInfoItems(info)}
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
            title
            id
            description
            descriptionNode {
              childMarkdownRemark {
                html
              }
            }
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
