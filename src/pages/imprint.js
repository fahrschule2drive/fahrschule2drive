import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Article from '../components/Article';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PostFooter from '../components/Footer/PostFooter';
import PreFooter from '../components/Footer/PreFooter';
import { Helmet } from 'react-helmet';

const Imprint = () => (
  <StaticQuery
    query={query}
    render={({
      datoCmsImprintPage: imprint
    }) => (
      <Fragment>
        <Helmet>
          <meta name="theme-color" content="#e02b20"/>
        </Helmet>

        <Header type="dark"/>
        <Article
          content={imprint.content}
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
    query ImprintQuery {
      datoCmsImprintPage(locale: {eq: "en"}) {
        content
      }
    }
  `;

export default Imprint;
