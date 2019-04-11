import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          firstName={faker.name.firstName()}
          lastName={faker.name.lastName()}
          timeAgo="2 hours ago"
          content="I like the way you explain in very simple techniques!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          firstName={faker.name.firstName()}
          lastName={faker.name.lastName()}
          timeAgo="7 hours ago"
          content="Nice video!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          firstName={faker.name.firstName()}
          lastName={faker.name.lastName()}
          timeAgo="3 hours ago"
          content="insane stuff right there..."
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
