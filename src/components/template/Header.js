import React from "react";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { FiBell, FiSearch } from "react-icons/fi";
import MoreIcon from "@material-ui/icons/MoreVert";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import Avatar from "../resusable/Avatar";
import SearchForm from "../resusable/SearchForm";
import SearchIcon from "@material-ui/icons/Search";
import v2Logo from "./v2-logo.svg";
import "./Header.css";

class Header extends React.Component {
  state = {
    anchorEl: null,
    showSearch: false
  };

  onMenuClick = () => {
    this.props.onsidebar();
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
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
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
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
                {/* <Badge badgeContent={17} color="secondary">
                  
                </Badge> */}
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

export default Header;
