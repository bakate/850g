import React from 'react';
import { usePerson } from './context/LocalState';
import FooterStyles from './styles/FooterStyles';

const Footer = () => {
  const { social } = usePerson();
  const socials = social.map((item, i) => (

    <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">{item.icon}</a>

  ));
  return (
    <FooterStyles>
      <div className="content">
        <p>
          Copyright &copy; 850grammes {new Date().getFullYear()} all rights
          reserved papi
        </p>
      </div>
      <div className="logos">{socials}</div>
    </FooterStyles>
  );
};

export default Footer;
