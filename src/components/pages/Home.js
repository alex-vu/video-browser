import React from "react";
import PopularList from "../resusable/PopularList";

const Home = () => {
  return (
    <React.Fragment>
      <div className="main-content">
        <div className="thumbnail-container">
          <div className="ui grid">
            <h2 className="section-title">Most Recommended</h2>
            <div className="five row">
              <PopularList />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
