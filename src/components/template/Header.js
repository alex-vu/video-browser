import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../resusable/SearchForm";
import history from "../../history";

const Header = () => {
  return (
    <div>
      <div className="ui large fixed menu navbar-dark">
        <Link to="/" className="active item big-text">
          VIKI
        </Link>
        <Link to="/" className="item m-right big-text">
          Browse
        </Link>
        <div className="item m-auto">
          <SearchForm history={history} />
        </div>
        <div className="right menu">
          <div className="ui dropdown item big-text">
            Language <i className="dropdown icon" />
            <div className="menu">
              <Link to="/" className="item">
                English
              </Link>
              <Link to="/" className="item">
                Russian
              </Link>
              <Link to="/" className="item">
                Spanish
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="ui primary button">Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
