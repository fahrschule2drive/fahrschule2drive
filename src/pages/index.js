import React from 'react';
import { graphql } from 'gatsby';

import DrivingSchool from '../components/DrivingSchool/DrivingSchool';
import Info from '../components/Info/Info';
import OurCars from '../components/OurCars';
import Promo from '../components/Promo/Promo';
import Tutors from '../components/Tutors/Tutors';

import '../styles/index.scss';

const IndexPage = ({ data: { home } }) => (
  <>
    <Promo/>
    <Info/>
    <DrivingSchool />
    <OurCars />
    <Tutors />
  </>
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
