import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img 
          src="https://imgs.search.brave.com/eLyVqpXvOyuwIBdsfUpDs8QEloMoxCWNSgSh9JzM2RU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1MjYu/cG5n" 
          alt="MeetMax Logo" 
          className="logo-img" 
        />
        <h2 className="logo-text">MeetMax</h2>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search for something here..." className="search-box" />
      </div>
      <div className="user-profile">
        <div className="profile-image">
          <img 
            src="https://imgs.search.brave.com/eeX_MK9H_y_4cRt8sUkSNLOihplwdvapjYn0bP18AqA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9za2l0Y2gtLTct/LnBuZw" // Replace with your image URL
            alt="Profile"
            className="profile-img"
          />
        </div>
        <p className="user-name">Kashish Arora</p>
      </div>
    </header>
  );
}

export default Header;
