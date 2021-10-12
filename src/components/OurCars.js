import Carousel from 'react-elastic-carousel';
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  wrapper: {
    margin: '0 auto',
    maxWidth: '1920px',
    padding: '0',
    position: 'relative',
  },
  imageContainer: {
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '400px',
    outline: 'none',
    width: '100%',
    '&:hover > p': {
      opacity: 1,
    },
  },
  description: {
    alignItems: 'flex-end',
    background: 'linear-gradient(90deg, rgba(0, 0, 0, .8) 0%, rgba(255, 255, 255,0) 100%)',
    color: 'var(--color-white)',
    display: 'flex',
    fontSize: '18px',
    height: '100%',
    opacity: 0,
    padding: '30px',
    transition: 'opacity .4s ease',
    width: '100%',
  },
}));

const carouselBreakPoints = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 768,
    itemsToShow: 2,
  },
  {
    width: 992,
    itemsToShow: 3,
  },
  {
    width: 1200,
    itemsToShow: 4,
  },
];

const OurCars = () => {
  const styles = useStyles();

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsCarPark: carPark,
      }) => (
        <div className={styles.wrapper}>
          <Carousel
            breakPoints={carouselBreakPoints}
            isRTL={false}
            pagination={false}
          >
            {carPark.carParkItem.map(item => (
              <div
                className={styles.imageContainer}
                key={item.id}
                style={{ backgroundImage: `url(${item.carImage.url})` }}
              >
                <p
                  className={styles.description}
                  dangerouslySetInnerHTML={{
                    __html: item.carDescription
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    />
  );
};

const query =
  graphql`
    query OurCarsQuery {
      datoCmsCarPark(locale: {eq: "en"}) {
        carParkItem {
          carDescription
          carImage {
            url
          }
          id
        }
      }
    }
  `;

export default OurCars;
