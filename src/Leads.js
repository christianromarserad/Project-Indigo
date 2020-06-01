import React from "react";
import {
  makeStyles,
  Avatar,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import { Payment, LocationOn, Link, ContactMail } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    color: theme.palette.grey[500],
  },
}));

const leads = [
  {
    title: "Tour Requests",
    value: 7,
    earn: 0,
    time: "This week",
    icon: <LocationOn />,
  },
  {
    title: "Connections",
    value: 13,
    earn: 0,
    time: "This week",
    icon: <Link />,
  },
  {
    title: "New Applications",
    value: 6,
    earn: 0,
    time: "This week",
    icon: <ContactMail />,
  },
  {
    title: "Pending Payments",
    value: 0,
    earn: 0,
    time: "This week",
    icon: <Payment />,
  },
  {
    title: "Overdue Payments",
    value: 10,
    earn: 0,
    time: "This week",
    icon: <Payment />,
  },
];

function Leads() {
  const { subtitle } = useStyles();
  return (
    <Grid container item xs={12} spacing={2}>
      {leads.map(({ title, value, earn, time, icon }) => (
        <Grid item xs={true} key={title}>
          <Card elevation={2}>
            <CardHeader
              avatar={<Avatar aria-label="recipe">{icon}</Avatar>}
              title={title}
            />
            <CardContent>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography
                    variant="h6"
                    style={{
                      paddingRight: "1rem",
                    }}
                  >
                    {value}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={true}
                  style={{
                    paddingLeft: "1rem",
                    borderLeft: "1px solid #DCDCDC",
                  }}
                >
                  <Typography>{earn}+</Typography>
                  <Typography className={subtitle} variant="subtitle2">
                    {time}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Leads;
