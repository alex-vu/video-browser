import React from "react";

const CardImage = ({ thumbnail, title }) => {
  const renderSrc = thumbnail => {
    if (thumbnail.medium.url) {
      return thumbnail.medium.url;
    } else if (thumbnail.default.url) {
      return thumbnail.default.url;
    } else if (thumbnail.standard.url) {
      return thumbnail.standard.url;
    } else {
      return thumbnail.high.url;
    }
  };

  return (
    <React.Fragment>
      <img className="thumbnails" alt={title} src={renderSrc(thumbnail)} />
    </React.Fragment>
  );
};

export default CardImage;
