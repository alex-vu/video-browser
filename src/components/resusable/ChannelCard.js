import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ item }) => {
  return (
    <React.Fragment>
      <Link to={`/profile/${item.id.channelId}`}>
        <img
          alt={item.snippet.title}
          src={item.snippet.thumbnails.medium.url}
        />
        <h4 className="ellipsis" title={item.snippet.title}>
          {item.snippet.title}
        </h4>
        <h5 title={item.snippet.channelTitle}>{item.snippet.channelTitle}</h5>
      </Link>
    </React.Fragment>
  );
};

export default ChannelCard;
