import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";

export const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
}) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div >
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={styles.infected}
        >
          <CardContent >
            <Typography color="textSecondary" gutterBottom>
              Infectados
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Número de casos activos de COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={styles.recovered}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recuperados
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Número de casos recuperados de COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={styles.deaths}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Muertes
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Número de muertes por COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
