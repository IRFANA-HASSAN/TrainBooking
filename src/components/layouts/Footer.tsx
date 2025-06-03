import React from 'react';
import styled  from 'styled-components';

const Footer = () => {
  return (
    <FooterModel >
      &copy; {new Date().getFullYear()} Your Company. All rights reserved.
    </FooterModel>
  );
};

export default Footer;

const FooterModel =styled.footer`
    text-align: center;
      padding: 2rem;
      background-color:rgb(0, 0, 0);
      margin-top: 2rem;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
      position:fixed;
      bottom:0;
      width:100%;
`;