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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
} from "@material-ui/core";
import {
  Loop,
  List as ListIcon,
  BatteryChargingFull,
  History,
  Work,
} from "@material-ui/icons";
import { ResponsiveLine } from "@nivo/line";
import earningsData from "./earningsData";
import Earnings from "./Earnings";
import aere from "./Aare.svg";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    padding: "2rem",
  },
  myProgram: {
    height: "300px",
  },
  programImage: {
    objectFit: "cover",
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
  const { mainContent, myProgram, programImage } = useStyles();
  return (
    <Grid item container>
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
  );
}

export default Program;
