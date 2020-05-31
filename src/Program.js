import React from "react";
import {
  makeStyles,
  Avatar,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Paper,
} from "@material-ui/core";
import {
  Loop,
  List as ListIcon,
  BatteryChargingFull,
  History,
} from "@material-ui/icons";
import aere from "./Aare.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "1rem 1rem 1rem 0",
  },
  myProgram: {
    height: "300px",
  },
  programImage: {
    objectFit: "cover",
  },
  paper: {
    padding: "1rem",
  },
}));

const listItems = [
  {
    label: "Active Students",
    value: 5,
    icon: <BatteryChargingFull />,
  },
  {
    label: "Pending Students",
    value: 2,
    icon: <Loop />,
  },
  {
    label: "Waitlisted Students",
    value: 1,
    icon: <ListIcon />,
  },
  {
    label: "Past Students",
    value: 6,
    icon: <History />,
  },
];

function Program() {
  const { mainContainer, myProgram, programImage, paper } = useStyles();
  return (
    <Grid item container className={mainContainer}>
      <Grid className={paper} item container component={Paper} elevation={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Little Hearts Program</Typography>
        </Grid>
        <Grid className={myProgram} item xs={12}>
          <img className={programImage} width="100%" height="20%" src={aere} />
          <Grid item container xs={12}>
            <List style={{ width: "100%" }}>
              {listItems.map(({ label, icon, value }) => (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>{icon}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={label} />
                  <ListItemSecondaryAction>
                    <Typography>{value}</Typography>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Program;
