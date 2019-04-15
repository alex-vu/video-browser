import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

const formatDuration = duration =>
  moment
    .duration(duration)
    .format("h:mm:ss")
    .padStart(4, "0:0");

const Duration = ({ duration }) => {
  return <p>{formatDuration(duration)}</p>;
};

export default Duration;
