import React from "react";

const Sidebar = () => {
  return (
    <div className="ui left fixed vertical menu sidebar-dark">
      <a href="/" className="item">
        <i className="home icon" />
      </a>
      <a href="/" className="item">
        <i className="user circle icon" />
      </a>
      <a href="/" className="item">
        <i className="cog icon" />
      </a>
    </div>
  );
};

export default Sidebar;
