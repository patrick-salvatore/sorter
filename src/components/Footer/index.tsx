import React from 'react';
import './footer.scss';
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  library,
} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnchorTag } from 'components/anchorTag/anchorTag';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faTwitter, faInstagram);

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return <footer className="footer"></footer>;
};
