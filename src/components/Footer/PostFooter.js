import React from 'react';
import { Link } from 'gatsby';

import Wrapper from '../Wrapper';

// Styles
import './PostFooter.scss';

const PostFooter = () => (
  <section className="post-footer">
    <Wrapper>
      <p className="post-footer__copyright">
        Copyright © 2020 Alle Rechte vorbehalten 2Drive fahrschule.{' '}
        <Link to={`/policy`}>Datenschutz</Link>.{' '}
        <Link to={`/imprint`}>Impressum</Link>.{' '}
        <Link to={`/agb`}>AGB</Link>.
      </p>
      <ul className="social">
        {/* <li className="social__item social__item--facebook">
          <a href="#" />
        </li> */}
        <li className="social__item social__item--instagram">
          <a href="https://www.instagram.com/fahrschule_2drive/" target="_blank" />
        </li>
        <li className="social__item social__item--whatsapp">
          <a href="https://api.whatsapp.com/send?phone=+4916091755054"/>
          <span className='social__subtitle'>Ostkreuz</span>
        </li>
        <li className="social__item social__item--whatsapp">
          <a href="https://api.whatsapp.com/send?phone=+4915753297031"/>
          <span className='social__subtitle'>Lichtenberg</span>
        </li>
      </ul>
    </Wrapper>
  </section>
);

export default PostFooter;
