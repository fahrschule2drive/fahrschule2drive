import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import DrivingSchool from '../components/DrivingSchool/DrivingSchool';
import Exam from '../components/Exam';
import Feedbacks from '../components/Feedbacks';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Info from '../components/Info/Info';
import ContactForm from '../components/ContactForm';
import OurCars from '../components/OurCars';
import PostFooter from '../components/Footer/PostFooter';
import PreFooter from '../components/Footer/PreFooter';
import Prices from '../components/Prices';
import Promo from '../components/Promo/Promo';
import Tutors from '../components/Tutors/Tutors';
import { LanguageContextProvider } from '../store/context/LanguageContext';

import '../styles/index.scss';

const IndexPage = ({ data: { home } }) => (
  <Fragment>
    <Helmet>
      <meta name="theme-color" content="#e02b20"/>
    </Helmet>

    <LanguageContextProvider>
      <Header/>
      <Promo/>
      <Info/>
      <DrivingSchool/>
      <OurCars/>
      <Tutors/>
      <Feedbacks/>
      <Exam/>
      <Prices/>
      <ContactForm/>
      <footer>
        <PreFooter/>
        <Footer/>
        <PostFooter/>
      </footer>
    </LanguageContextProvider>
  </Fragment>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    home: datoCmsHomePage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      introTextNode {
        childMarkdownRemark {
          html
        }
      }
      copyright
    }
  }
`;
