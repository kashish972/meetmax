import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faEnvelope, faBell, faCompass, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar">

      <ul>
      <li className="feed-item"><FontAwesomeIcon icon={faHome} /> Feed</li>
<li><FontAwesomeIcon icon={faUsers} /> My Community</li>
<li><FontAwesomeIcon icon={faEnvelope} /> Messages</li>
<li>
  <FontAwesomeIcon icon={faBell} /> Notification
  <span className="notification-badge">+2</span>
</li>
<li><FontAwesomeIcon icon={faCompass} /> Explore</li>
<li><FontAwesomeIcon icon={faUser} /> Profile</li>
<li><FontAwesomeIcon icon={faCog} /> Settings</li>
<li><FontAwesomeIcon icon={faSignOutAlt} /> Logout</li>


      </ul>
    </div>
  );
}

export default Sidebar;

