import React from "react";
import avatarImage from "./avatar.png";
import {
  makeStyles,
  AppBar,
  Avatar,
  Grid,
  IconButton,
  Input,
  Toolbar,
  Typography,
  Paper,
} from "@material-ui/core";
import { MailOutline, NotificationsNone, Search } from "@material-ui/icons";
import SideBar from "./SideBar";
import Content from "./Content";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
    color: "black",
  },
  appBarProfile: {
    "& div, button": {
      margin: "0 7px 0 7px",
    },
  },
  searchBar: {
    padding: "0 1rem 0 1rem",
    width: "700px",
    backgroundColor: theme.palette.grey[200],
    borderRadius: "10px",
    "& path": {
      color: theme.palette.grey[600],
    },
    "& input": {
      width: "100%",
    },
  },
}));

function App() {
  const { appBar, appBarProfile, searchBar } = useStyles();
  return (
    <>
      <AppBar className={appBar} elevation={3}>
        <Toolbar>
          <Grid item xs={4}></Grid>
          <Grid xs={4} item className={searchBar} container alignItems="center">
            <Grid item>
              <Search />
            </Grid>
            <Grid item xs={true}>
              <Input disableUnderline fullWidth />
            </Grid>
          </Grid>
          <Grid
            item
            xs={4}
            className={appBarProfile}
            container
            alignItems="center"
            justify="flex-end"
          >
            <IconButton>
              <NotificationsNone />
            </IconButton>
            <IconButton>
              <MailOutline />
            </IconButton>
            <div>
              <Avatar src={avatarImage} />
            </div>
            <Typography>John Doe</Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item>
          <SideBar />
        </Grid>
        <Grid xs={true}>
          <Content />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
