import React from "react";
import { connect } from "react-redux";
import { fetchVideosByMostPopular } from "../../actions";
import ChannelCard from "./ChannelCard";
import Card from "./Card";
import "./CircularIndeterminate";
import CircularIndeterminate from "./CircularIndeterminate";

class PopularList extends React.Component {
  componentDidMount() {
    this.props.fetchVideosByMostPopular();
  }

  renderThumbnail(item) {
    if (item.id.channelId) {
      return <ChannelCard item={item} />;
    } else {
      return <Card item={item} />;
    }
  }

  renderVideosByMostPopular() {
    return this.props.items.map(item => {
      return (
        <div className="card column" key={item.etag}>
          {this.renderThumbnail(item)}
        </div>
      );
    });
  }

  render() {
    if (!this.props.items) {
      return <CircularIndeterminate />;
    }

    return <React.Fragment>{this.renderVideosByMostPopular()}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    items: state.popularVideos.items
  };
};

export default connect(
  mapStateToProps,
  { fetchVideosByMostPopular }
)(PopularList);
