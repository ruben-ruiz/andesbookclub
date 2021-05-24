import React from 'react';
import LandingNav from './LandingNav';
import Footer from './Footer';

function Landing() {
  return (
    <div className="landing">
      <LandingNav />
      <div className="hook">
        <p className="hook-phrase">Refresh your understanding through quizzes.</p>
        <img href="#" className="hook-img" alt="hook_img" />
      </div>
      <div className="about">
        <p className="about-phrase">
          Track the books you have read.\nTest your understanding with the material.\n
          Setup a schedule to refresh the material.\n
          Interact with a community of Ande&apos;s Bookies
        </p>
        <img className="about-img about-img_back" href="#" alt="img_1" />
        <img className="about-img about-img_front" href="#" alt="img_2" />
      </div>
      <div className="mission">
        <p>
          We believe in the importance of
          books and their abundance of knowledge. After reading it may be
          hard to retain the material. We have you covered! Take quizzes on
          books you have read! Keep track of your performance! Manage your list
          books!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
