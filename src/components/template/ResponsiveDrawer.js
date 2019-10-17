import React from "react";
import PropTypes from "prop-types";
import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
/* Icons */
import HomeIcon from "@material-ui/icons/HomeSharp";
import TrendIcon from "@material-ui/icons/BarChartSharp";
import SubscriptionIcon from "@material-ui/icons/SubscriptionsSharp";
import HistoryIcon from "@material-ui/icons/HistorySharp";
import WatchLaterIcon from "@material-ui/icons/WatchLaterSharp";
import ThumbUpIcon from "@material-ui/icons/ThumbUpAltSharp";
import MusicVideoIcon from "@material-ui/icons/MusicVideoSharp";
import VideoGameIcon from "@material-ui/icons/VideogameAssetSharp";
import TvIcon from "@material-ui/icons/TvSharp";
import LiveTvIcon from "@material-ui/icons/LiveTvSharp";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import "./ResponsiveDrawer.css";

const drawerWidth = 240;
const drawerTop = 64;

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  hide: {
    display: "none"
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    top: drawerTop,
    backgroundColor: "#1c1c1c"
  },
  activeLink: {
    color: "#ff1e00"
  },
  divider: {
    backgroundColor: "rgba(255, 255, 255, 0.12)"
  },
  listItem: {
    color: "rgba(255,255,255,0.87)"
  },
  iconColor: {
    color: "rgba(255,255,255,0.54)"
  },
  activeItem: {
    color: "#ffffff"
  },
  activeBackground: {
    backgroundColor: "#5a5a5a"
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false
  };

  theme = createMuiTheme({
    palette: {
      primary: red,
      light: "#ffffff"
    }
  });

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;
    const topSection = ["Home", "Trending", "Subscriptions"];
    const middleSection = ["History", "Watch Later", "Liked Video"];
    const bottomSection = ["Music", "Sports", "Gaming", "TV Shows", "Live TV"];

    const drawer = (
      <div theme={theme}>
        <List>
          <ListItem
            button
            key={topSection[0]}
            classes={{ root: classes.activeBackground }}
          >
            <ListItemIcon>
              <HomeIcon classes={{ root: classes.activeItem }} />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.activeItem }}
              primary={topSection[0]}
            />
          </ListItem>

          <ListItem button key={topSection[1]}>
            <ListItemIcon classes={{ root: classes.iconColor }}>
              <TrendIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItem }}
              primary={topSection[1]}
            />
          </ListItem>

          <ListItem button key={topSection[2]}>
            <ListItemIcon classes={{ root: classes.iconColor }}>
              <SubscriptionIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItem }}
              primary={topSection[2]}
            />
          </ListItem>
        </List>

        <Divider classes={{ root: classes.divider }} />

        <List>
          <ListItem button key={middleSection[0]}>
            <ListItemIcon classes={{ root: classes.iconColor }}>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItem }}
              primary={middleSection[0]}
            />
          </ListItem>

          <ListItem button key={middleSection[1]}>
            <ListItemIcon classes={{ root: classes.iconColor }}>
              <WatchLaterIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItem }}
              primary={middleSection[1]}
            />
          </ListItem>

          <ListItem button key={middleSection[2]}>
            <ListItemIcon classes={{ root: classes.iconColor }}>
              <ThumbUpIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItem }}
              primary={middleSection[2]}
            />
          </ListItem>
        </List>
        <Divider classes={{ root: classes.divider }} />
        <List>
          <ListItem button key={bottomSection[0]}>
            <ListItemIcon classes={{ root: classes.iconColor }}>
              <MusicVideoIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItem }}
              primary={bottomSection[0]}
            />
          </ListItem>
          <ListItem button key={bottomSection[1]}>
            <ListItemIcon classes={{ root: classes.iconColor }}>
              <WatchLaterIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItem }}
              primary={bottomSection[1]}
            />
          </ListItem>
          <ListItem button key={bottomSection[2]}>
            <ListItemIcon classes={{ root: classes.iconColor }}>
              <VideoGameIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItem }}
              primary={bottomSection[2]}
            />
          </ListItem>
          <ListItem button key={bottomSection[3]}>
            <ListItemIcon classes={{ root: classes.iconColor }}>
              <TvIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItem }}
              primary={bottomSection[3]}
            />
          </ListItem>
          <ListItem button key={bottomSection[4]}>
            <ListItemIcon classes={{ root: classes.iconColor }}>
              <LiveTvIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItem }}
              primary={bottomSection[4]}
            />
          </ListItem>
        </List>
      </div>
    );

    return (
      <React.Fragment>
        <nav
          className={`${classes.drawer} ${
            this.props.isopen ? classes.hide : ""
          }`}
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </React.Fragment>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
