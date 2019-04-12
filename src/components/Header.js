import React from "react";

const Header = () => {
  return (
    <div>
      <div className="ui large fixed menu navbar-dark">
        <a href="/" className="active item">
          Home
        </a>
        <a href="/" className="item m-right">
          Messages
        </a>
        <div className="item m-auto">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="circular search link icon" />
          </div>
        </div>
        <div className="right menu">
          <div className="ui dropdown item">
            Language <i className="dropdown icon" />
            <div className="menu">
              <a href="/" className="item">
                English
              </a>
              <a href="/" className="item">
                Russian
              </a>
              <a href="/" className="item">
                Spanish
              </a>
            </div>
          </div>
          <div className="item">
            <div className="ui primary button">Sign Up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
