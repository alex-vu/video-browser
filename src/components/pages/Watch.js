import React from "react";
import { connect } from "react-redux";
import { fetchVideoById } from "../../actions";
import NumericDisplay from "../resusable/NumericDisplay";
import "./Watch.css";

class Watch extends React.Component {
  componentDidMount() {
    this.props.fetchVideoById(this.props.match.params.id);
  }

  renderVideo() {
    return this.props.items.map(item => {
      const videoSrc = `https://www.youtube.com/embed/${item.id}`;
      return (
        <div key={item.id} className="responsive">
          <iframe
            title="video"
            width="1280px"
            height="720"
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    });
  }

  renderChannel() {
    const { items, channels } = this.props;
    if (items[0].snippet.channelId === channels[0].id) {
      return channels.map(channel => {
        return (
          <div key={channel.id}>
            <img
              style={{
                borderRadius: "50%",
                width: "70px",
                marginBottom: "15px"
              }}
              src={channel.snippet.thumbnails.default.url}
              alt="profile"
            />
          </div>
        );
      });
    }
  }

  renderContent() {
    return this.props.items.map(item => {
      return (
        <div key={item.id}>
          <h4
            style={{
              color: "#222222",
              fontWeight: "400",
              marginBottom: "0",
              fontSize: "1.3rem"
            }}
          >
            {item.snippet.title}
          </h4>
          <p style={{ color: "#adadad", marginTop: ".5rem" }}>
            <NumericDisplay viewCount={item.statistics.viewCount} /> views
          </p>
        </div>
      );
    });
  }

  render() {
    if (!this.props.items) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ marginLeft: "70px" }}>
        <div className="thumbnail-container">
          <div style={{ maxWidth: "1280px" }}>
            {this.renderVideo()}
            {this.renderContent()}
            {/* {this.renderChannel()} */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.popularVideos.items
    // channels: state.channelVideos.items
  };
};

export default connect(
  mapStateToProps,
  { fetchVideoById }
)(Watch);
