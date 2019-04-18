import React from "react";

const NumericDisplay = ({ viewCount }) => {
  const convertToDecimal = num => {
    return num.toLocaleString();
  };

  return <React.Fragment>{convertToDecimal(Number(viewCount))}</React.Fragment>;
};

export default NumericDisplay;
