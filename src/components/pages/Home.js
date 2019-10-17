import React from "react";
import PopularList from "../resusable/PopularList";

class Home extends React.Component {
  componentDidMount() {
    document.title = "VideoBook";
  }

  render() {
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
  }
}

export default Home;
