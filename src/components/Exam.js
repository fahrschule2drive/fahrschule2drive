import React, { useContext } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Wrapper from './Wrapper';
import { getLocaleValue } from '../utils';
import { LanguageContext } from '../store/context/LanguageContext';

// Styles
import './Exam.scss';

const Exam = () => {
  const languageStore = useContext(LanguageContext);

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsExam: exam,
      }) => (
        <section className="exam overlay" style={{ backgroundImage: `url(${exam.background.url})` }}>
          <Wrapper>
            <div className="section-header">
              <div className="section-header__icon section-header__icon--tutors"
                   style={{ backgroundImage: `url(${exam.icon.url})` }}/>
              <h2 className="section-header__title">
                {getLocaleValue({
                  language: languageStore.store.language,
                  locales: exam._allTitleLocales,
                })}
              </h2>
            </div>
            <div
              className="exam__description"
              dangerouslySetInnerHTML={{
                __html: getLocaleValue({
                  language: languageStore.store.language,
                  locales: exam._allDescriptionLocales,
                })
              }}
            />
            <div className="center">
              <button className="cta">Начать сейчас</button>
            </div>
          </Wrapper>
        </section>
      )}
    />
  );
};

const query =
  graphql`
    query ExamQuery {
      datoCmsExam(locale: {eq: "en"}) {
        _allTitleLocales {
          locale
          value
        }
        _allDescriptionLocales {
          locale
          value
        }
        background {
          url
        }
        icon {
          url
        }
      }
    }
  `;

export default Exam;
