import React from "react";
import { connect } from "react-redux";
import { fetchVideoById } from "../../actions";

class Watch extends React.Component {
  componentDidMount() {
    this.props.fetchVideoById(this.props.match.params.id);
  }

  renderVideo() {
    return this.props.items.map(item => {
      const videoSrc = `https://www.youtube.com/embed/${item.id}`;
      return (
        <div className="ui embed" key={item.id}>
          <iframe
            title="video"
            width="1280px"
            height="200"
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    });
  }

  renderContent() {
    return this.props.items.map(item => {
      return (
        <div key={item.id}>
          <h4 style={{ color: "white" }} className="ui header">
            {item.snippet.title}
          </h4>
          {/* <p style={{ color: "white" }}>{item.snippet.description}</p> */}
          <p style={{ color: "#adadad" }}>{item.statistics.viewCount} views</p>
        </div>
      );
    });
  }

  render() {
    if (!this.props.items) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ marginTop: "90px", marginLeft: "100px" }}>
        <div className="thumbnail-container">
          <div style={{ maxWidth: "1280px" }}>
            {this.renderVideo()}
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.popularVideos.items
  };
};

export default connect(
  mapStateToProps,
  { fetchVideoById }
)(Watch);
