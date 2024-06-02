import * as React from 'react';
import Header from './Header';
import Subsection from './Subsection';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="overlay"></div>
      <div className="content-wrapper">
        <Header />
        <div className="subsection-container">
          <Subsection id="home" title="Home" content="Welcome to the official website of DJ Dephcon. Stay tuned for the latest news and updates." />
          <Subsection id="about" title="About" content="Learn more about DJ Dephcon, his music journey, and what drives his passion." />
          <Subsection id="music" title="Music" content="Explore the latest tracks and albums released by DJ Dephcon." />
          <Subsection id="events" title="Events" content="Check out upcoming events and performances by DJ Dephcon." />
          <Subsection id="contact" title="Contact" content="Get in touch with DJ Dephcon for bookings or inquiries." />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
