import React from 'react';

function Footer() {
  return React.createElement(
    'footer',
    { className: 'bg-light text-center py-3' },
    React.createElement(
      'p',
      null,
      '\xA9 ',
      new Date().getFullYear(),
      ' My Portfolio'
    )
  );
}

export default Footer;