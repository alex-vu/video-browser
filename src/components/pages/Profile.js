import React from "react";

class Profile extends React.Component {
  componentDidMount() {
    document.title = "Profile";
  }

  render() {
    return <div>Profile page</div>;
  }
}

export default Profile;
