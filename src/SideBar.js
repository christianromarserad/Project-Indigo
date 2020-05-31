import React from "react";
import {
  makeStyles,
  Toolbar,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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

function SideBar() {
  const { paper } = useStyles();
  return (
    <Paper className={paper}>
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
  );
}

export default SideBar;
