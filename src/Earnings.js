import React from "react";
import avatarImage from "./avatar.png";
import { makeStyles, Grid, Typography } from "@material-ui/core";

import { ResponsiveLine } from "@nivo/line";
import earningsData from "./earningsData";

const useStyles = makeStyles((theme) => ({
  earningsGraphContainer: {
    height: "300px",
  },
}));

function Earnings() {
  const { earningsGraphContainer } = useStyles();
  return (
    <Grid item container>
      <Grid item xs={12}>
        <Typography variant="h5">Earning Overview</Typography>
      </Grid>
      <Grid className={earningsGraphContainer} item xs={12}>
        <ResponsiveLine
          data={earningsData}
          enableGridX={false}
          enableGridY={false}
          curve="monotoneX"
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Date",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Earning",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          colors={{ scheme: "nivo" }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}

export default Earnings;
