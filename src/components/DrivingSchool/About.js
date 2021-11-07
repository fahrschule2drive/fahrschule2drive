import React, { useContext } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { LanguageContext } from '../../store/context/LanguageContext';
import { getLocaleValue } from '../../utils';

// Styles
import './About.scss';

const About = () => {
  const languageStore = useContext(LanguageContext);

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsDrivingSchool: drivingSchool,
      }) => (
        <div className="about">
          <img src={drivingSchool.office.url} alt="office" className="about__image" />
          <article
            className="about__article"
            dangerouslySetInnerHTML={{
              __html: getLocaleValue({
                language: languageStore.store.language,
                locales: drivingSchool._allDescriptionLocales,
              }),
            }}
          />
        </div>
      )}
    />
  );
};

const query =
  graphql`
    query AboutQuery {
      datoCmsDrivingSchool(locale: {eq: "en"}) {
        office {
          url
        }
        _allDescriptionLocales {
          locale
          value
        }
      }
    }
  `;

export default About;
