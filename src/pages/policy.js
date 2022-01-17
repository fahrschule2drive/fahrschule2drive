import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Article from '../components/Article';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PostFooter from '../components/Footer/PostFooter';
import PreFooter from '../components/Footer/PreFooter';

const DataPolicy = () => (
  <StaticQuery
    query={query}
    render={({
      datoCmsPolicyPage: policy
    }) => (
      <Fragment>
        <Header type="dark"/>
        <Article
          content={policy.content}
        />
        <footer>
          <PreFooter/>
          <Footer/>
          <PostFooter/>
        </footer>
      </Fragment>
    )}
  />
);

const query =
  graphql`
    query PolicyQuery {
      datoCmsPolicyPage(locale: {eq: "en"}) {
        content
      }
    }
  `;

export default DataPolicy;
