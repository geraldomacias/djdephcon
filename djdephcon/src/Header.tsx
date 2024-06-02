import * as  React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1 className="dj-name">DJ Dephcon</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#music">Music</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
