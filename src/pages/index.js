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
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
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

//   <Link to={`/works/${work.slug}`} className="card__image">
//   <Img fluid={work.coverImage.fluid} />
// </Link>
// <figcaption className="card__caption">
//   <h6 className="card__title">
//     <Link to={`/works/${work.slug}`}>{work.title}</Link>
//   </h6>
//   <div className="card__description">
//     <p>{work.excerpt}</p>
//   </div>
// </figcaption>
