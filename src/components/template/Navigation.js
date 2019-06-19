import React from "react";
import Header from "./Header";
import ResponsiveDrawer from "./ResponsiveDrawer";

class Navigation extends React.Component {
  state = { isOpen: false };

  handleSidebar = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <React.Fragment>
        <Header onsidebar={this.handleSidebar} />
        <ResponsiveDrawer isopen={this.state.isOpen} />
      </React.Fragment>
    );
  }
}

export default Navigation;
