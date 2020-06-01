import React from "react";
import {
  makeStyles,
  Toolbar,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Hidden,
} from "@material-ui/core";
import {
  Dashboard,
  List as ListIcon,
  CalendarToday,
  Assessment,
  AccountTree,
  Settings,
  Receipt,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "white",
    color: "black",
    height: "100vh",
    width: "200px",
    zIndex: theme.zIndex.snackbar,
  },
}));

const listItems = [
  {
    label: "Dashboard",
    icon: <Dashboard />,
    to: "/",
  },
  {
    label: "Project",
    icon: <AccountTree />,
    to: "/",
  },
  {
    label: "Reporting",
    icon: <Assessment />,
    to: "/",
  },
  {
    label: "Calendar",
    icon: <CalendarToday />,
    to: "/",
  },
  {
    label: "Tasks",
    icon: <ListIcon />,
    to: "/task",
  },
  {
    label: "Utilities",
    icon: <Settings />,
    to: "/",
  },
  {
    label: "Templates",
    icon: <Receipt />,
    to: "/",
  },
];

function SideBar({ open, onClose }) {
  const { paper } = useStyles();
  return (
    <>
      <Drawer variant="temporary" open={open} onClose={onClose}>
        <List component="nav" aria-labelledby="nested-list-subheader">
          {listItems.map(({ label, icon, to }) => (
            <ListItem button component={Link} to={to} onClick={onClose}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Hidden smDown>
        <Paper className={paper} open={true}>
          <Toolbar />
          <List component="nav" aria-labelledby="nested-list-subheader">
            {listItems.map(({ label, icon, to }) => (
              <ListItem button component={Link} to={to}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Hidden>
    </>
  );
}

export default SideBar;
