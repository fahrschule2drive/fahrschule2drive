import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Article from '../components/Article';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PostFooter from '../components/Footer/PostFooter';
import PreFooter from '../components/Footer/PreFooter';

const Imprint = () => (
  <StaticQuery
    query={query}
    render={({
      datoCmsImprintPage: imprint
    }) => (
      <Fragment>
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
