import React from 'react';

const Footer = ({ purchasedCount }) => {
  return (
    <footer>
      <p>Total Items Purchased: {purchasedCount}</p>
    </footer>
  );
};

export default Footer;
