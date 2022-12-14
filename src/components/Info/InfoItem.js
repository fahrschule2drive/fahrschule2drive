import classnames from 'classnames';
import React from 'react';

import './InfoItem.scss';

const Benefit = ({
  data,
  index,
}) => (
  <div className="info-item">
    <h3 className={classnames('info-item__title', {
      'info-item__title--warning': index === 2,
    })}>
      {data.title}
    </h3>
    {data.descriptionNode.childMarkdownRemark ? (
      <div
        className="info-item__description-block"
        dangerouslySetInnerHTML={{
          __html: data.descriptionNode?.childMarkdownRemark?.html,
        }}
      />
    ) : (
      <p className="info-item__description">
        {data.description}
      </p>
    )}
  </div>
);

export default Benefit;
