import React from "react";

const Watch = () => {
  return (
    <div style={{ marginTop: "70px" }}>
      {" "}
      <div className="thumbnail-container">
        <div style={{ maxWidth: "1280px" }}>
          <div className="ui embed">
            <iframe
              width="1280px"
              height="200"
              src="https://www.youtube.com/embed/UON-VqyOrUI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h4 className="ui header">Video title</h4>
          <p>video description</p>
        </div>
      </div>
    </div>
  );
};

export default Watch;
