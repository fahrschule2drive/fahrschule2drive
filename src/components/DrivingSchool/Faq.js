import React, { useContext, useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import IconMinus from '../../images/icons/minus.svg';
import IconPlus from '../../images/icons/plus.svg';
import { LanguageContext } from '../../store/context/LanguageContext';
import { getLocaleValue } from '../../utils';

import './Faq.scss';

const Faq = () => {
  const languageStore = useContext(LanguageContext);

  const [activeFaqPoint, setActiveFaqPoint] = useState(null);

  const handleClick = index => {
    if (activeFaqPoint === index) {
      setActiveFaqPoint(null);
    } else {
      setActiveFaqPoint(index);
    }
  };

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsDrivingSchool: drivingSchool,
      }) => (
        <div className="faq">
          {getLocaleValue({
            language: languageStore.store.language,
            locales: drivingSchool._allFaqItemsLocales,
          }).map((item, index) => (
            <div
              className="faq__item"
              key={index}
              style={{ backgroundImage: `url(${activeFaqPoint === index ? IconMinus : IconPlus})` }}
            >
              <div
                className="faq__question"
                onClick={() => handleClick(index)}
                role="button"
                tabIndex="-1"
              >
                {item.question}
              </div>
              {activeFaqPoint === index && (
                <div
                  className="faq__answer"
                  dangerouslySetInnerHTML={{
                    __html: item.answerNode.childMarkdownRemark.html,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    />
  );
};

const query =
  graphql`
    query FaqQuery {
      datoCmsDrivingSchool(locale: {eq: "en"}) {
        _allFaqItemsLocales {
          locale
          value {
            answerNode {
              childMarkdownRemark {
                html
              }
            }
            question
          }
        }
      }
    }
  `;

export default Faq;
