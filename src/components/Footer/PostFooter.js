import React from 'react';

import Wrapper from '../Wrapper';

// Styles
import './PostFooter.scss';

const PostFooter = () => (
  <section className="post-footer">
    <Wrapper>
      <p className="post-footer__copyright">Copyright © 2020 Alle Rechte vorbehalten 2Drive fahrschule. Datenschutz</p>
      <ul className="social">
        <li className="social__item social__item--facebook">
          <a href="#" />
        </li>
        <li className="social__item social__item--instagram">
          <a href="#" />
        </li>
        <li className="social__item social__item--whatsapp">
          <a href="#" />
        </li>
      </ul>
    </Wrapper>
  </section>
);

export default PostFooter;
