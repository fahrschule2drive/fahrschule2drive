import React from 'react';

import { graphql, StaticQuery } from 'gatsby';

import Grid from '../Grid';
import SectionHeader from '../SectionHeader';
import Wrapper from '../Wrapper';

// Styles
import './Tutors.scss';

const Tutors = () => {
  const renderLanguages = (item) => {
    const tutorLanguages = JSON.parse(item.tutorLanguages);
    if (tutorLanguages &&
      Array.isArray(tutorLanguages) &&
      tutorLanguages[0] &&
      Array.isArray(tutorLanguages[0].languages)
    ) {
      return tutorLanguages[0].languages.map((language, index) => (
        <li className={`tutor__language tutor__language--${language}`} key={index}/>
      ));
    }
  };

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsCarPark: carPark,
        datoCmsTutor: tutors,
      }) => (
        <section className="tutors">
          <Wrapper>
            <p
              className="tutors__cars-description"
              dangerouslySetInnerHTML={{
                __html: carPark.galleryDescription,
              }}
            />
            <SectionHeader
              className="section-header__icon--tutors"
              iconUrl={tutors.titleIcon.url}
              title={tutors.title}
            />
            <Grid columns="4">
              {tutors.tutorList.map(item => {
                return (
                  <div className="tutor" key={item.id}>
                    <img src={item.tutorImage.url} alt="tutor 1" className="tutor__image" />
                    <ul className="tutor__languages">
                      {renderLanguages(item)}
                    </ul>
                    <span className="tutor__name">
                  {item.tutorName}
                </span>
                    <span className="tutor__description">
                  {item.tutorDescription}
                </span>
                  </div>
                )
              })}
            </Grid>
            <p
              className="tutors__description"
              dangerouslySetInnerHTML={{
                __html: tutors.description,
              }}
            />
          </Wrapper>
        </section>
      )}
    />
  );
}

const query =
  graphql`
    query TutorsQuery {
      datoCmsCarPark(locale: {eq: "en"}) {
        galleryDescription
      }
      datoCmsTutor(locale: {eq: "en"}) {
        description
        title
        titleIcon {
          url
        }
        tutorList {
          id
          tutorImage {
            url
          }
          tutorLanguages
          tutorName
          tutorDescription
        }
      }
    }
  `;

export default Tutors;
