import classnames from 'classnames';
import React from 'react';

import './Grid.scss';

const Grid = ({
  children,
  columns,
}) => (
  <div
    className={classnames('grid', {
      'grid__columns--2': columns === 2,
      'grid__columns--3': columns === 3,
      'grid__columns--4': columns === 4,
    })}
  >
    {children}
  </div>
)

export default Grid;
