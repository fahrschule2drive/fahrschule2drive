import classnames from 'classnames';
import React, { useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  wrapper: {
    '@media screen and (min-width: 768px)': {
      flex: '1 1 50%',
    },
  },
  item: {
    background: 'url(../images/icons/plus.svg) calc(100% - 4px) 20px no-repeat',
    backgroundSize: '20px 20px',
    borderTop: '1px solid var(--color-separator)',

    '&:last-child': {
      borderBottom: '1px solid var(--color-separator)',
    },
  },
  itemActive: {
    background: 'url(../images/icons/minus.svg) calc(100% - 4px) 20px no-repeat',
    backgroundSize: '20px 20px',
  },
  question: {
    cursor: 'pointer',
    fontWeight: '600',
    padding: '20px 40px 20px 0',
  },
  answer: {
    paddingBottom: '20px',

    '& > ul > li:before': {
      content: '"—"',
      color: 'var(--color-primary)',
      paddingRight: '12px',
    },

    '& > *:not(:first-child)': {
      marginTop: '20px',
    },
  },
}));

const Faq = () => {
  const [activeFaqPoint, setActiveFaqPoint] = useState(null);

  const styles = useStyles();

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
        <div className={styles.wrapper}>
          {drivingSchool.faqItems.map((item, index) => (
            <div
              className={classnames(styles.item, {
                [styles.itemActive]: activeFaqPoint === index,
              })}
              key={index}
            >
              <div className={styles.question} onClick={() => handleClick(index)}>
                {item.question}
              </div>
              {activeFaqPoint === index && (
                <div
                  className={styles.answer}
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
        faqItems {
          answerNode {
            childMarkdownRemark {
              html
            }
          }
          question
        }
      }
    }
  `;

export default Faq;

// <div className={`faq__item ${activeFaqPoint === index && 'faq__item--active'}`} key={index}>
//   <div className="faq__question" onClick={() => handleClick(index)}>
//     {item.question}
//   </div>
//   {activeFaqPoint === index && (
//     <div className="faq__answer">
//       {item.answer}
//     </div>
//   )}
// </div>
