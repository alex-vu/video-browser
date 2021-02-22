import React from "react";
import RelatedItem from "./RelatedItem";
import "./RelatedPlaylist.css";

class RelatedPlaylist extends React.Component {
  renderPlaylist() {
    return this.props.relatedplaylist.map((relatedItem) => {
      return (
        <RelatedItem
          key={relatedItem.id.videoId}
          id={relatedItem.id.videoId}
          relateditem={relatedItem.snippet}
          history={this.props.history}
        />
      );
    });
  }

  render() {
    return (
      <div className="related-playlist">
        {this.props.relatedplaylist ? this.renderPlaylist() : null}
      </div>
    );
  }
}

export default RelatedPlaylist;
