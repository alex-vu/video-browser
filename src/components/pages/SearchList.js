import React from "react";
import { connect } from "react-redux";
import { fetchVideos } from "../../actions";
import ChannelCard from "../resusable/ChannelCard";
import Card from "../resusable/Card";

class SearchList extends React.Component {
  componentDidMount() {
    // this.props.fetchVideos(this.props.match.params.value);
  }

  renderThumbnail(item) {
    if (item.id.channelId) {
      return <ChannelCard item={item} />;
    } else {
      return <Card item={item} />;
    }
  }

  renderList() {
    return this.props.items.map(item => {
      return (
        <div className="card active column" key={item.etag}>
          {this.renderThumbnail(item)}
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
        <div className="main-content">
          <div className="thumbnail-container">
            <div className="ui grid">
              <h2>{this.props.items.length} Search Results</h2>
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
    items: state.searchVideos.items
  };
};

export default connect(
  mapStateToProps,
  { fetchVideos }
)(SearchList);
