import React from "react";
import { connect } from "react-redux";
import { fetchVideosByChannelId } from "../../actions";
import ChannelCard from "./ChannelCard";
import Card from "./Card";

class ChannelVideos extends React.Component {
  componentDidMount() {
    this.props.fetchVideosByChannelId();
  }

  renderThumbnail(item) {
    if (item.id.channelId) {
      return <ChannelCard item={item} />;
    } else {
      return (
        <Card channelVideoId={item.contentDetails.upload.videoId} item={item} />
      );
    }
  }

  renderVideosByChannelId() {
    return this.props.items.map(item => {
      return (
        <div className="video-thumbnail column" key={item.etag}>
          {this.renderThumbnail(item)}
        </div>
      );
    });
  }

  render() {
    if (!this.props.items) {
      return <div>Loading...</div>;
    }
    return <React.Fragment>{this.renderVideosByChannelId()}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    items: state.channelVideos.items
  };
};

export default connect(
  mapStateToProps,
  { fetchVideosByChannelId }
)(ChannelVideos);
