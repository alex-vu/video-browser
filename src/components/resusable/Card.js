import React from "react";
import { Link } from "react-router-dom";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import CardTitle from "./CardTitle";
import CardProfile from "./CardProfile";

const Card = ({ item, channelVideoId }) => {
  const renderLink = (item, channelVideoId) => {
    if (item.id.videoId) {
      return `/watch/${item.id.videoId}`;
    } else if (channelVideoId) {
      return `/watch/${channelVideoId}`;
    } else {
      return `/watch/${item.id}`;
    }
  };

  const { thumbnails, title, channelId, channelTitle } = item.snippet;
  return (
    <React.Fragment>
      <Link to={renderLink(item, channelVideoId)}>
        <CardImage thumbnail={thumbnails} title={title} videoId={item.id} />
      </Link>
      <CardContent>
        <Link to={renderLink(item, channelVideoId)}>
          <CardTitle title={title} />
        </Link>
        <CardProfile channelId={channelId} channelTitle={channelTitle} />
      </CardContent>
    </React.Fragment>
  );
};

export default Card;
