import React from "react";

const MainContent = props => {
  return (
    <main style={{ padding: "24px", flexGrow: "1" }}>{props.children}</main>
  );
};

export default MainContent;
