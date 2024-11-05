import React from 'react';
import './MainFeed.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap,faCameraRetro} from '@fortawesome/free-solid-svg-icons';
function MainFeed() {
  return (
    <div className="main-feed-container">
      <div className="main-content">
        {/* Left side: Main Feed */}
        <div className="main-feed">
          <div className="post-input-section">
            <div className="user-avatar">
              <img src="https://imgs.search.brave.com/eeX_MK9H_y_4cRt8sUkSNLOihplwdvapjYn0bP18AqA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9za2l0Y2gtLTct/LnBuZw" alt="User" />
           
            <input
              type="text"
              className="post-input"
              placeholder="What's happening?"
            />
             </div>
            <div className="post-options">
              <button className="option-btn">🎥 Live Video</button>
              <button className="option-btn">📸 Photo/Video</button>
              <button className="option-btn">🙂 Feeling</button>
              <button className="post-btn">Post</button>
            </div>
          </div>

          <div className="post">
            {/* Post Content */}
            <div className="post-header">
              <div className="post-user-info">
                <img src="https://imgs.search.brave.com/J6EpmyoiWfrtyXEweDM7goGMcPI_ZrLAtVEs4TYuxDM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/eWJsb2stY2RuLnBo/b3Rvcm9vbS5jb20v/Zi8xOTE1NzYvMTIw/MHg4MDAvNGU1NGI5/MjhlZi9yZW1vdmVf/YmFja2dyb3VuZC53/ZWJw" alt="User" className="post-user-avatar" />
                <div>
                  <h4>Sepural Gallery</h4>
                  <span>15h · Public</span>
                </div>
              </div>
              <button className="more-options">...</button>
            </div>
            <div className="mainpost">
            <img src="https://imgs.search.brave.com/tRKkY3TG7UUyIqG4A72vq6QEhHv8huDDeaGIprVNMkc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/NTcyMzUwNC9waG90/by9jb3R0YWdlLWhv/dXNlcy12aWxsYWdl/LXRyYWRpdGlvbmFs/LWFyY2hpdGVjdHVy/ZS1jb3p5LWhvbWUt/aW4tbW91bnRhaW5z/LW9mLW5vcndheS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/S1VoMmNieUdnSzFW/RklvZ05sOU5obGVX/OTRGWFdhRjl6cnNo/ZFRaQ1FIaz0" alt="Post" className="post-image" />
            </div>
            <div className="post-engagement">
              <div className="engagement-icons">
                <img src="https://imgs.search.brave.com/6RS8OkMGzHbTCRNnUDJBpF5-7N-9skZH4ysm1Hhjmz4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9zaWdtdW5kLU1R/MnhZQkhJbUtNLXVu/c3BsYXNoLS0xLS0x/LmpwZw" alt="Like" />
                <img src="https://imgs.search.brave.com/Py_FgNPyCAJZl0W1dhQ1ecARYO1esxIhIFd2gdDAhLs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODk1Njgx/MjYwMTQtMDZmZWE5/ZDVkMzQxP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjAuMyZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1U/TjhmSEJ5YjJacGJH/VWxNakJ3YVdOMGRY/SmxmR1Z1ZkRCOGZE/QjhmSHd3.jpeg" alt="Comment" />
                <span>+9</span>
              </div>
              <div className="comments-share">
                <span>3 Comments</span>
                <span>17 Shares</span>
              </div>
            </div>
            <div className="post-actions">
              <button className="action-btn">Like</button>
              <button className="action-btn">Comments</button>
              <button className="action-btn">Share</button>
            </div>
            <div className="comment-section">
              <img src="https://imgs.search.brave.com/eeX_MK9H_y_4cRt8sUkSNLOihplwdvapjYn0bP18AqA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9za2l0Y2gtLTct/LnBuZw" alt="User" className="comment-user-avatar" />
              <input type="text" className="comment-input" placeholder="Write a comment..." />
            </div>
          </div>
        </div>

        {/* Right side: Additional Sections */}
        <div className="sidebar">
          <div className="you-might-like">
            <h3>You Might Like</h3>
            <div className="suggestion">
              <img src="https://imgs.search.brave.com/orEVEI4iyLCgGO1Um6MKgX1nC3-0WHSyT9Or198agbU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9hbWluYS5wbmc" alt="User" />
              <div className="suggestion-info">
                <h4>Radovan SkillArena</h4>
                <span>Founder & CEO at Trophy</span>
              </div>
              <div className="suggestion-actions">
                <button className="ignore-btn">Ignore</button>
                <button className="follow-btn">Follow</button>
              </div>
            </div>
          </div>

          <div className="recent-event">
            <h3>Recent Event</h3>
            <div className="event">
              <span className="event-icon"><FontAwesomeIcon icon={faGraduationCap} size="2xl" style={{ color: "#63E6BE" }} /></span>
              <div className="event-info">
                <h4>Graduation Ceremony</h4>
                <p>8 seen <div className="sc">
                
                <img src="https://imgs.search.brave.com/6RS8OkMGzHbTCRNnUDJBpF5-7N-9skZH4ysm1Hhjmz4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9zaWdtdW5kLU1R/MnhZQkhJbUtNLXVu/c3BsYXNoLS0xLS0x/LmpwZw" alt="Like" />
                <img src="https://imgs.search.brave.com/Py_FgNPyCAJZl0W1dhQ1ecARYO1esxIhIFd2gdDAhLs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODk1Njgx/MjYwMTQtMDZmZWE5/ZDVkMzQxP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjAuMyZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1U/TjhmSEJ5YjJacGJH/VWxNakJ3YVdOMGRY/SmxmR1Z1ZkRCOGZE/QjhmSHd3.jpeg" alt="Comment" />
                
              </div></p>
              </div>
            </div>
            <div className="event">   
            

            <FontAwesomeIcon icon={faCameraRetro} size="2xl" style={{color: "#f58f00",}} />
              <div className="event-info">
                <h4>Photography Ideas</h4>
                <p>11 seen <div className="sc">
                <img src="https://imgs.search.brave.com/6RS8OkMGzHbTCRNnUDJBpF5-7N-9skZH4ysm1Hhjmz4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9zaWdtdW5kLU1R/MnhZQkhJbUtNLXVu/c3BsYXNoLS0xLS0x/LmpwZw" alt="Like" />
                <img src="https://imgs.search.brave.com/Py_FgNPyCAJZl0W1dhQ1ecARYO1esxIhIFd2gdDAhLs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODk1Njgx/MjYwMTQtMDZmZWE5/ZDVkMzQxP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjAuMyZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1U/TjhmSEJ5YjJacGJH/VWxNakJ3YVdOMGRY/SmxmR1Z1ZkRCOGZE/QjhmSHd3.jpeg" alt="Comment" />
                
              </div></p>
              </div>
            </div>
          </div>

          <div className="birthdays">
            <h3>Birthdays</h3>
            <div className="birthday">
              <img src="https://imgs.search.brave.com/itbOnEbuyfTeikuS6vYWTKDLqiCEiEpKn7K4n_HwxJQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODk1Mzkx/MzcyMzYtYjY4ZTQz/NjI0OGRlP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjAuMyZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE5Y/eDhjSEp2Wm1sc1pT/VXlNSEJwWTNSMWNt/VjhaVzU4TUh4OE1I/eDhmREE9.jpeg" alt="User" />
              <div className="birthday-info">
                <h4>Edison De Carvalho</h4>
                <span>Birthday today</span>
              </div>
              <button className="message-btn">Write on his inbox</button>
            </div>
            <div className="upcoming-birthdays">
              <p>See 12 others have upcoming birthdays</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFeed;
