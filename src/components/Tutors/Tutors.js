import React, { useContext } from 'react';

import { graphql, StaticQuery } from 'gatsby';

import Grid from '../Grid';
import SectionHeader from '../SectionHeader';
import Wrapper from '../Wrapper';
import { getLocaleValue } from '../../utils';
import { LanguageContext } from '../../store/context/LanguageContext';

// Styles
import './Tutors.scss';

const Tutors = () => {
  const languageStore = useContext(LanguageContext);

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
        <section
          className="tutors"
          style={{ backgroundImage: `url(${tutors.background.url})` }}
        >
          <Wrapper>
            <p
              className="tutors__cars-description"
              dangerouslySetInnerHTML={{
                __html: getLocaleValue({
                  language: languageStore.store.language,
                  locales: carPark._allGalleryDescriptionLocales,
                }),
              }}
            />
            <SectionHeader
              className="section-header__icon--tutors"
              iconUrl={tutors.titleIcon.url}
              title={getLocaleValue({
                language: languageStore.store.language,
                locales: tutors._allTitleLocales,
              })}
            />
            <Grid columns="4">
              {getLocaleValue({
                language: languageStore.store.language,
                locales: tutors._allTutorListLocales,
              }).map(item => (
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
              ))}
            </Grid>
            <p
              className="tutors__description"
              dangerouslySetInnerHTML={{
                __html: getLocaleValue({
                  language: languageStore.store.language,
                  locales: tutors._allDescriptionLocales,
                }),
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
        _allGalleryDescriptionLocales {
          locale
          value
        }
      }
      datoCmsTutor(locale: {eq: "en"}) {
        _allDescriptionLocales {
          locale
          value
        }
        _allTitleLocales {
          locale
          value
        }
        background {
          url
        }
        titleIcon {
          url
        }
        _allTutorListLocales {
          locale
          value {
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
    }
  `;

export default Tutors;
