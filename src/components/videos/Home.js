import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchVideos } from "../../actions";
import Sidebar from "../Sidebar";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchVideos();
  }

  renderList() {
    return this.props.items.map(item => {
      console.log(item);
      return (
        <div className="video-thumbnail column" key={item.id}>
          <Link to={`/watch/${item.id}`}>
            <img
              alt={item.snippet.title}
              src={item.snippet.thumbnails.medium.url}
            />
            <h4 title={item.snippet.title}>{item.snippet.title}</h4>
            <h5 title={item.snippet.channelTitle}>
              {item.snippet.channelTitle}
            </h5>
          </Link>
        </div>
      );
    });
  }

  render() {
    if (!this.props.items) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        <Sidebar />
        <div className="main-content">
          <div className="thumbnail-container">
            <h1>Recommendations</h1>
            <div className="ui grid">
              <div className="five column row">{this.renderList()}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.videos.items
  };
};

export default connect(
  mapStateToProps,
  { fetchVideos }
)(Home);
