import Carousel from 'react-elastic-carousel';
import React, { useContext } from 'react';
import { getLocaleValue } from '../utils';
import { graphql, StaticQuery } from 'gatsby';
import { LanguageContext } from '../store/context/LanguageContext';

// Styles
import './OurCars.scss';

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
  const languageStore = useContext(LanguageContext);

  return (
    <StaticQuery
      query={query}
      render={({
        datoCmsCarPark: carPark,
      }) => (
        <div className="cars">
          <Carousel
            breakPoints={carouselBreakPoints}
            isRTL={false}
            pagination={false}
          >
            {getLocaleValue({
              language: languageStore.store.language,
              locales: carPark._allCarParkItemLocales,
            }).map(item => (
              <div
                className="cars__image-container"
                key={item.id}
                style={{ backgroundImage: `url(${item.carImage.url})` }}
              >
                <p
                  className="cars__description"
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
        _allCarParkItemLocales {
          locale
          value {
            carDescription
            carImage {
              url
            }
            id
          }
        }
      }
    }
  `;

export default OurCars;
