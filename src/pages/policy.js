import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

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
        <Helmet>
          <link rel="apple-touch-icon" sizes="180x180" href="../images/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon/favicon-16x16.png"/>
        </Helmet>

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
