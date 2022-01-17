import React from 'react';

import Wrapper from './Wrapper';

// Styles
import './Article.scss';

const Article = ({ content }) => (
  <Wrapper>
    <div
      className="article"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  </Wrapper>
);

export default Article;
