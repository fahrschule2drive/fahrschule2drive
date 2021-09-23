import React from 'react';

import './Benefit.scss';

const Benefit = ({
  benefit,
  children,
}) => (
  <div className="benefit">
    <img
      alt="benefit"
      className="benefit__image"
      src={benefit.icon.url}
    />
    <p className="benefit__title">
      {benefit.title}
    </p>
    {children}
  </div>
);

export default Benefit;
