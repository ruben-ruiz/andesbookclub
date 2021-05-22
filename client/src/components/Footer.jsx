import React from 'react';

const Footer = (props) {
  return (
    <div className="footer">
      <div className="footer-contact">
        <h3 className="footer-contact-title">Contact Us</h3>
        <p className="footer-contact-email">johnDoe@gmail.com</p>
        <p className="footer-contact-phone">1-(800)-000-0000</p>
      </div>
      <div className="footer-social">
        <a href="footer-social-twitter">Twitter</a>
        <a href="footer-social-instagram">Instagram</a>
        <a href="footer-social-facebook">facebook</a>
      </div>
    </div>
  );
};

export default Footer;
