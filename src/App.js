import React, { useState } from "react";
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
  Hidden,
} from "@material-ui/core";
import {
  MailOutline,
  NotificationsNone,
  Search,
  Menu,
} from "@material-ui/icons";
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <AppBar className={appBar} elevation={3}>
        <Toolbar>
          <Grid item sm={0} md={4}></Grid>
          <Hidden smDown>
            <Grid xs={4} item className={searchBar} container>
              <Grid container alignItems="center">
                <Search />

                <Grid item xs={true}>
                  <Input disableUnderline fullWidth placeholder="Search" />
                </Grid>
              </Grid>
            </Grid>
          </Hidden>

          <Hidden mdUp>
            <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
              <Menu />
            </IconButton>
          </Hidden>

          <Grid
            item
            sm={true}
            md={4}
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
          <SideBar open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </Grid>
        <Grid xs={true}>
          <Content />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
