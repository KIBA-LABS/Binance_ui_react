import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import ListIcon from "@material-ui/icons/List";
import HistoryIcon from "@material-ui/icons/History";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupWorkIcon from "@material-ui/icons/GroupWork";

function drawer() {
  return (
    <Drawer variant="permanent" style={{ marginTop: "70px" }}>
      <div>
        <ListItem
          style={{
            backgroundColor: "white",
            borderRadius: "50px",
            marginTop: "5px",
          }}
          button
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Flat and Spot" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="Margin" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Futures" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Funding" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CompareArrowsIcon />
          </ListItemIcon>
          <ListItemText primary="Earn" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary="Vanilla Option" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary="JEX" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary="Wazir" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary="Binance TR" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary="Tokocrypto" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary="Pexpay" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary="Transaction History" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary="Account Statement" />
        </ListItem>
      </div>
    </Drawer>
  );
}
export default drawer;
