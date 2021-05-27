import React from 'react';
import { Button } from 'reactstrap';
import LandingNav from './LandingNav';
import Footer from './Footer';

// images
import hookImg from '../assets/img/reading.png';
import aboutImg from '../assets/img/studying.png';
import graph from '../assets/img/graph.png';

function Landing() {
  return (
    <div className="landing">
      <LandingNav />
      <div className="hook">
        <div className="hook-left">
          <p className="hook-phrase">Refresh your understanding through quizzes.</p>
          <Button className="hook-btn">Sign In</Button>
        </div>
        <img src={hookImg} className="hook-img" alt="hook_img" />
      </div>
      <div className="about">
        <p className="about-phrase">
          Track the books you have read. Test your understanding with the material.
          Setup a schedule to refresh the material.
          Interact with a community of Ande&apos;s Bookies
        </p>
        <img className="about-img about-img_front" src={aboutImg} alt="img_2" />
      </div>
      <div className="mission">
        <img src={graph} className="mission-img" />
        <p className="mission-phrase">
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
