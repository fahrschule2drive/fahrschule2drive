import React, { useContext } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Wrapper from '../Wrapper';
import About from './About';
import SectionHeader from '../SectionHeader';
import Faq from './Faq';
import { LanguageContext } from '../../store/context/LanguageContext';
import { getLocaleValue } from '../../utils';

// Styles
import './DrivingSchool.scss';

const DrivingSchool = () => {
  const languageStore = useContext(LanguageContext);

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsDrivingSchool: drivingSchool,
      }) => (
        <section className="driving-school" style={{ backgroundImage: `url(${drivingSchool.background.url})` }}>
          <Wrapper>
            <SectionHeader
              className="driving-school__title"
              iconUrl={drivingSchool.titleIcon.url}
              title={getLocaleValue({
                language: languageStore.store.language,
                locales: drivingSchool._allTitleLocales,
              })}
            />
            <div className="driving-school__content">
              <About />
              <Faq />
            </div>
            <SectionHeader
              className="driving-school__subtitle"
              iconUrl={drivingSchool.subtitleIcon.url}
              title={getLocaleValue({
                language: languageStore.store.language,
                locales: drivingSchool._allSubtitleLocales,
              })}
            />
          </Wrapper>
        </section>
      )}
    />
  );
};

const query =
  graphql`
    query DrivingSchoolQuery {
      datoCmsDrivingSchool(locale: {eq: "en"}) {
        _allTitleLocales {
          locale
          value
        }
        _allSubtitleLocales {
          locale
          value
        }
        background {
          url
        }
        subtitleIcon {
          url
        }
        titleIcon {
          url
        }
      }
    }
  `;

export default DrivingSchool;
