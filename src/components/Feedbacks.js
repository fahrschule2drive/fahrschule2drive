import React from 'react';

import Wrapper from './Wrapper';

import IconFeedbacks from "../images/icons/feedbacks.svg";

// Styles
import './Feedbacks.scss'

const Feedbacks = () => (
  <section className="feedbacks">
    <Wrapper>
      <div className="section-header">
        <div className="section-header__icon section-header__icon--tutors" style={{ backgroundImage: `url(${IconFeedbacks})` }}/>
        <div className="section-header__subtitle">Google Maps</div>
        <h2 className="section-header__title">Отзывы об автошколе</h2>
      </div>
    </Wrapper>
  </section>
);

export default Feedbacks;
