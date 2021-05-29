import React from 'react';
import Footer from '../../widgets/Footer';
import hookImg from '../../assets/img/reading.png';
import aboutImg from '../../assets/img/studying.png';
import graph from '../../assets/img/graph.png';

function Landing() {
  return (
    <div className="landing">
      <div className="hook">
        <div className="hook-left">
          <p className="hook-phrase">
            &quot;The more that you read, the more things you will know.
            The more that you learn, the more places you&apos;ll go.&quot; - Dr. Seuss
          </p>
        </div>
        <img src={hookImg} className="hook-img" alt="hook_img" />
      </div>
      <div className="about">
        <p className="about-phrase">
          Remember the books you&apos;ve read.
          <br />
          Refresh your understanding with the top voted questions.
          <br />
          Retain information better with routine reminders.
          <br />
          Contribute questions for community competitions.
        </p>
        <img className="about-img about-img_front" src={aboutImg} alt="img_2" />
      </div>
      <div className="mission">
        <img src={graph} className="mission-img" />
        <p className="mission-phrase">
          Here at Andes Bookclub, we&apos;ve all worked hard to read a book
          only to promptly forget fascinating facts.
          <br />
          We are harnessing spaced repetition, a ground-breaking strategy proven to
          promote memory formation and increase rate of learning.
          <br />
          Optimize your retention and make the books you read count!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
