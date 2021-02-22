import React from "react";
import { Link } from "react-router-dom";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import CardTitle from "./CardTitle";
import CardProfile from "./CardProfile";

const RelatedItem = ({ relateditem, id, history }, props) => {
  const renderLink = (id, channelVideoId) => {
    if (id) {
      return `/watch/${id}`;
    } else if (channelVideoId) {
      return `/watch/${channelVideoId}`;
    } else {
      return `/watch/${id}`;
    }
  };

  const changePath = (id, history) => {
    let currentPath = history.location.pathname;
    let nextLocation = `/watch/${id}`;
    if (currentPath !== nextLocation) {
      return nextLocation;
    }
  };

  const renderRelated = () => {
    if (relateditem) {
      const { thumbnails, title, channelId, channelTitle } = relateditem;
      return (
        <div className="card">
          <Link to={renderLink(id, relateditem.channelId)} replace={changePath}>
            <CardImage thumbnail={thumbnails} />
          </Link>
          <CardContent>
            <Link to={renderLink(id, relateditem.channelId)} replace>
              <CardTitle title={title} />
            </Link>
            <CardProfile channelId={channelId} channelTitle={channelTitle} />
          </CardContent>
        </div>
      );
    } else {
      return null;
    }
  };

  return renderRelated();
};

export default RelatedItem;
