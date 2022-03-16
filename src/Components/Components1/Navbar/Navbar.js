import React from "react";
import "./Navbar.css";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import AppsIcon from "@material-ui/icons/Apps";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logo: {
    height: "30px",
    width: "100px",
  },
}));

function Navbar() {
  const history = useHistory();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <img
            style={{ cursor: "pointer" }}
            src="binancelogo1.png"
            alt=""
            className={classes.logo}
            onClick={() => {
              history.push("/");
            }}
          ></img>{" "}
          &nbsp; &nbsp; &nbsp;
          <AppsIcon style={{ cursor: "pointer" }} />
          &nbsp; &nbsp;&nbsp;
          <Typography
            className={classes.title}
            style={{ cursor: "pointer" }}
            variant="body2"
            noWrap
            onClick={() => {
              history.push("/buy");
            }}
          >
            Buy Crypto
          </Typography>{" "}
          &nbsp; &nbsp;
          <Box
            component="span"
            color="black"
            className="arrow"
            style={{
              textAlign: "center",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            USD
          </Box>{" "}
          &nbsp; &nbsp;
          <Typography
            varient="body2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              history.push("/ethereum");
            }}
          >
            Trade
          </Typography>{" "}
          &nbsp; &nbsp;
          <Typography
            varient="body2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              history.push("/earn");
            }}
          >
            Earn
          </Typography>{" "}
          &nbsp; &nbsp;
          <Typography
            style={{ cursor: "pointer" }}
            varient="body2"
            onClick={() => {
              history.push("/fund");
            }}
          >
            Finance
          </Typography>{" "}
          &nbsp; &nbsp;
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div style={{ margin: "auto", display: "flex" }}>
              <Typography
                style={{ cursor: "pointer" }}
                varient="body2"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Log in
              </Typography>{" "}
              &nbsp; &nbsp; &nbsp; &nbsp;
              <Typography varient="body2" style={{ cursor: "pointer" }}>
                Wallet
              </Typography>{" "}
              &nbsp; &nbsp;
              <Typography
                style={{ cursor: "pointer" }}
                varient="body2"
                onClick={() => {
                  history.push("/order");
                }}
              >
                Orders
              </Typography>
              &nbsp; &nbsp;
            </div>

            <div style={{ margin: "auto", display: "flex", cursor: "pointer" }}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABZElEQVRIie3WMUscQRyG8Z/RRNJEIRJLEWwSIyiENBpSiIKNTSBd6iB+DsU6TVL4ARSsDGgTy5BCUphKLRXEQoNIGlE5i7kFGde9XW9OUvjAv9hhdp55d2d3hgf+MybxGxv3JXyKRdTqtXkf0i78uiat4VOrpU/wM5Ke4VmrxV8iaU14xy3lDS5zxCspJY9y2uZuaT9LKY7pl5+2hh8pRXGy6Zy2jL6U4phl+WmzGkglitM1SvUxlThmR3HiI3SnEMWJTxv0f46FFOKYVcWJs5ppVtQeXY9gtMR9UzgXfqtJGFMucVbreF1i3MeYEDaeXNpxUFF+gTV8xhB60IFejAtrYr/ed75odrMVxVXqXaPHstsC6VKRNGMY/xJK94RPsRQfhJXbrPQQr8pKMybxtwnpNl5WlWYM4HtF4QW+SXRUei/sXqcFwhN8xWCjwdruMIFOvBV2shf1MY6xhT/CQeKBG1wBLlPcyf97PBwAAAAASUVORK5CYII="
                style={{ height: "20px" }}
              />
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
export default Navbar;
