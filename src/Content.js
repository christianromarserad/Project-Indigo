import React from "react";
import { makeStyles, Grid, Toolbar } from "@material-ui/core";
import DashBoard from "./DashBoard";
import Task from "./Task";
import { Route, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    padding: "2rem",
  },
}));

function Content() {
  const { mainContent } = useStyles();
  return (
    <Grid container direction="column">
      <Toolbar />
      <Switch>
        <Route path="/task" component={Task} />
        <Route path="/" component={DashBoard} />
      </Switch>
    </Grid>
  );
}

export default Content;
