import React from "react";
import { Grid, Toolbar } from "@material-ui/core";
import DashBoard from "./DashBoard";
import Task from "./Task";
import { Route, Switch } from "react-router-dom";

function Content() {
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
