import React from "react";
// import ChannelVideos from "./resusable/ChannelVideos";
import PopularList from "../resusable/PopularList";

const Home = () => {
  return (
    <React.Fragment>
      <div className="main-content">
        <div className="thumbnail-container">
          <div className="ui grid">
            {/* <h2>Recommended</h2>
            <div className="five column row">
              <ChannelVideos />
            </div> */}
            <h2>Most Recommended</h2>
            <div className="five column row">
              <PopularList />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
