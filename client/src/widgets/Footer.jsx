import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-contact">
        <h3 className="footer-contact-title">Contact Us</h3>
        <p className="footer-contact-email">johnDoe@gmail.com</p>
        <p className="footer-contact-phone">1-(800)-000-0000</p>
      </div>
      <div className="footer-social">
        <a className="footer-social-twitter" href="twitter.com"><img src="https://img.icons8.com/android/24/000000/twitter.png" /></a>
        <a className="footer-social-instagram" href="instagram.com"><img src="https://img.icons8.com/material-rounded/24/000000/instagram-new.png" /></a>
        <a className="footer-social-facebook" href="https://www.facebook.com/"><img src="https://img.icons8.com/android/24/000000/facebook-new.png" /></a>
      </div>
    </div>
  );
}

export default Footer;
