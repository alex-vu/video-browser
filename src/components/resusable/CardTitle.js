import React from "react";
import MultiClamp from 'react-multi-clamp';

const CardTitle = ({ title }) => {
  return (
    <React.Fragment>
      <h4 title={title}>
        <MultiClamp ellipsis="..." clamp={2}>{title}</MultiClamp>
      </h4>
    </React.Fragment>
  );
};

export default CardTitle;
