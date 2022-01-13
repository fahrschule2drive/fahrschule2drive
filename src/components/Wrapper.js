import classnames from 'classnames';
import React from 'react';

import './Wrapper.scss';

const Wrapper = ({ children, className, id }) => (
  <div
    className={classnames('wrapper', {
      [className]: className,
    })}
    id={id}
  >
    {children}
  </div>
);

export default Wrapper;
