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

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsInfo: info,
      }) => (
        <Wrapper className="info" id="info">
          <Grid columns={4}>
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
