import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import { FiBell, FiSearch } from "react-icons/fi";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import Avatar from "../resusable/Avatar";
import SearchForm from "../resusable/SearchForm";
import v2Logo from "./v2-logo.svg";
import "./Header.css";

import { connect } from "react-redux";
import { API_KEY, OAUTH_CLIENT_ID } from "../../actions/types";
import { signIn, signOut } from "../../actions";

const DISCOVERY_DOCS =
  "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest";
const SCOPES = "https://www.googleapis.com/auth/youtube.readonly";

class Header extends React.Component {
  state = {
    anchorEl: null,
    showSearch: false,
    isAuthorized: false,
    profileInfo: {},
  };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          apiKey: API_KEY,
          clientId: OAUTH_CLIENT_ID,
          scope: SCOPES,
          discoveryDocs: [DISCOVERY_DOCS],
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.setState({ isAuthorized: true });
      this.props.signIn(this.auth.currentUser.get().getId()); // action creator
      this.getProfileInfo();
    } else {
      this.setState({ isAuthorized: false, profileInfo: {}, profileId: "" }); // Initial state
      this.props.signOut();
    }
  };

  getProfileInfo = () => {
    const request = window.gapi.client.request({
      method: "GET",
      path: "/youtube/v3/channels",
      params: { part: "snippet", mine: "true" },
    });
    // Execute the API request.
    request.execute((response) => {
      this.setState({ profileInfo: response, profileId: response.items[0].id });
    });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  onMenuClick = () => {
    this.props.onsidebar();
  };

  handleProfileMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = (event) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleMobileSearch = () => {
    this.setState({ showSearch: !this.state.showSearch });
  };

  render() {
    const { anchorEl, showSearch } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const searchClassName = showSearch ? "show" : "hide-on-large";

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>
          <Link to={`/profile/${this.state.profileId}`}>My Profile</Link>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <button
            onClick={this.onSignOutClick}
            className="ui red google button"
          >
            <i className="google icon" />
            Sign Out
          </button>
        </MenuItem>
      </Menu>
    );

    return (
      <React.Fragment>
        <header className="header-root fixed-top">
          <nav className="navbar navbar-resize toolbar-gutters">
            <IconButton
              style={{ marginLeft: "-12px", marginRight: "20px" }}
              color="inherit"
              onClick={this.onMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/" className="logo-wrapper">
              <img alt="logo" src={v2Logo} />
              <span className="logo-text">ideo</span>
            </Link>
            <div className="grow" />
            <div className="hide-on-large">
              <SearchForm />
            </div>
            <IconButton color="inherit">
              <div className="search-button" onClick={this.handleMobileSearch}>
                <FiSearch />
              </div>
            </IconButton>
            <div className="grow hide-s" />
            <div>
              <IconButton color="inherit">
                <FiBell />
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar />
              </IconButton>
            </div>
            {/* <div className="grow hide-s" />
            <div>
              <IconButton color="inherit">
                <FiBell />
              </IconButton>
              {this.state.isAuthorized ? (
                <IconButton
                  aria-owns={isMenuOpen ? "material-appbar" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar />
                </IconButton>
              ) : (
                <button
                  onClick={this.onSignInClick}
                  className="ui red google button"
                >
                  <i className="google icon" />
                  Sign In with Google
                </button>
              )}
            </div> */}
          </nav>

          {/* Search form on small screen */}
          {showSearch ? (
            <nav
              className={`navbar navbar-resize toolbar-gutters navbar-mobile fixed-top ${searchClassName}`}
            >
              <div className="back-button" onClick={this.handleMobileSearch}>
                <ArrowBackSharpIcon />
              </div>
              <SearchForm />
            </nav>
          ) : null}
        </header>
        {renderMenu}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(Header);
