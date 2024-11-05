import React from 'react';
import './RightSidebar.css';

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="suggestions">
        <h4>You Might Like</h4>
        <p>Suggestions for following people...</p>
      </div>
      <div className="recent-events">
        <h4>Recent Event</h4>
        <p>Details about events...</p>
      </div>
      <div className="friends-list">
        <h4>Friends</h4>
        <p>Friends you might want to connect with...</p>
      </div>
    </div>
  );
}

export default RightSidebar;