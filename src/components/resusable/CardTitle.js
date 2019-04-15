import React from "react";

const CardTitle = ({ title }) => {
  return (
    <React.Fragment>
      <h4 className="ellipsis" title={title}>
        {title}
      </h4>
    </React.Fragment>
  );
};

export default CardTitle;
