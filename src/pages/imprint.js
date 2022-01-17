import React, { useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Article from '../components/Article';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PostFooter from '../components/Footer/PostFooter';
import PreFooter from '../components/Footer/PreFooter';
import { LanguageContext, LanguageContextProvider } from '../store/context/LanguageContext';
import { getLocaleValue } from '../utils';

const DataPolicy = () => {
  const languageStore = useContext(LanguageContext);

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsPolicyPage: policy
      }) => (
        <LanguageContextProvider>
          <Header/>
          <Article
            content={getLocaleValue({
              language: languageStore.store.language,
              locales: policy._allContentLocales,
            })}
          />
          <footer>
            <PreFooter/>
            <Footer/>
            <PostFooter/>
          </footer>
        </LanguageContextProvider>
      )}
    />
  );
};

const query =
  graphql`
    query PolicyQuery {
      datoCmsPolicyPage(locale: {eq: "en"}) {
        _allContentLocales {
          locale
          value
        }
      }
    }
  `;

export default DataPolicy;
