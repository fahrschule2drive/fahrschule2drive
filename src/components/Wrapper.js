import classnames from 'classnames';
import React from 'react';

import './Wrapper.scss';

const Wrapper = ({ children, className }) => (
  <div
    className={classnames('wrapper', {
      [className]: className,
    })}
  >
    {children}
  </div>
);

export default Wrapper;
