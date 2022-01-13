import classnames from 'classnames';
import React from 'react';

// Styles
import './SectionHeader.scss';

const SectionHeader = ({
  className,
  iconUrl,
  title,
  id,
}) => (
  <div className="section-header" id={id}>
    <div className={classnames('section-header__icon', className)} style={{ backgroundImage: `url(${iconUrl})` }}/>
    <h2>
      {title}
    </h2>
  </div>
);

export default SectionHeader;
