import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Earnings from "./Earnings";
import Program from "./Program";
import Leads from "./Leads";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    padding: "1rem",
    margin: 0,
  },
}));

function DashBoard() {
  const { mainContent } = useStyles();
  return (
    <Grid container className={mainContent}>
      <Grid item xs={12} sm={12} md={6}>
        <Earnings />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Program />
      </Grid>
      <Leads />
    </Grid>
  );
}

export default DashBoard;
