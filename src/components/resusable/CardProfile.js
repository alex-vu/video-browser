import React from "react";
import { Link } from "react-router-dom";

const CardProfile = ({ channelId, channelTitle }) => {
  return (
    <Link to={`/profile/${channelId}`}>
      <h5 title={channelTitle}>{channelTitle}</h5>
    </Link>
  );
};

export default CardProfile;
