import React from 'react';
import { Link, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core';

import DrivingSchool from '../components/DrivingSchool/DrivingSchool';
import Info from '../components/Info/Info';
import Promo from '../components/Promo/Promo';

import '../styles/index.scss';

const useStyles = makeStyles(() => ({}));

const IndexPage = ({ data: { home } }) => {
  const styles = useStyles();

  return (
    <>
      <Promo/>
      <Info/>
      <DrivingSchool />
    </>
  );
};

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
