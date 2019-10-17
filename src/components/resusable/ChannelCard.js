import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ item, className }) => {
  return (
    <React.Fragment>
      <Link to={`/profile/${item.id.channelId}`} className={className}>
        <div className="channel-image">
          <img
            alt={item.snippet.title}
            src={item.snippet.thumbnails.medium.url}
          />
        </div>
        <div className="channel-author">
          <h4 className="channel-title ellipsis" title={item.snippet.title}>
            {item.snippet.title}
          </h4>
          {/* <h5 title={item.snippet.channelTitle}>{item.snippet.channelTitle}</h5> */}
          <p className="channel-description">{item.snippet.description}</p>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ChannelCard;
