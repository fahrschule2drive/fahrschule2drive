import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core';

import Wrapper from '../Wrapper';
import About from './About';
import SectionHeader from '../SectionHeader';
import Faq from './Faq';

const useStyles = makeStyles(() => ({
  section: {
    backgroundColor: 'var(--color-background)',
    backgroundPosition: '0 center',
    backgroundRepeat: 'no-repeat',
    padding: '40px 0',

    '@media screen and (min-width: 992px)': {
      padding: '80px 0',
    }
  },
  titleDrivingSchool: {
    height: '48px',
    width: '48px',
  },
  content: {
    margin: '50px 0 80px',

    '@media screen and (min-width: 768px)': {
      display: 'flex',
    },

    '@media screen and (min-width: 992px)': {
      margin: '80px 0 160px',
    },
  },
  titleOurCars: {
    height: '56px',
    width: '56px',
  },
}));

const DrivingSchool = () => {
  const styles = useStyles();

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsDrivingSchool: drivingSchool,
      }) => (
        <section id={1} className={styles.section} style={{ backgroundImage: `url(${drivingSchool.background.url})` }}>
          <Wrapper id={2}>
            <SectionHeader
              className={styles.titleDrivingSchool}
              iconUrl={drivingSchool.titleIcon.url}
              title={drivingSchool.title}
            />
            <div className={styles.content}>
              <About />
              <Faq />
            </div>
            <SectionHeader
              className={styles.titleOurCars}
              iconUrl={drivingSchool.subtitleIcon.url}
              title={drivingSchool.subtitle}
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
        background {
          url
        }
        subtitle
        subtitleIcon {
          url
        }
        title
        titleIcon {
          url
        }
      }
    }
  `;

export default DrivingSchool;
