import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

export default function Title() {
  // Style Hook
  const useStyles = makeStyles({
    titleDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Montserrat',
    },
    title: {
      color: '#247B7B',
      fontFamily: 'Pacifico',
      fontSize: '50px',
      WebkitTextFillColor: 'white',
      WebkitTextStrokeWidth: '1.25px',
      WebkitTextStrokeColor: '#247B7B',
      textShadow: '.5px .5px 0 #247B7B',
    },
    subTitle: {
      color: '#247B7B',
      fontFamily: 'Pacifico',
      fontSize: '20px'
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.titleDiv}>
      <Grid container justify='center'>
        <img
          src='https://cdn.dribbble.com/users/180062/screenshots/5623548/finch.png'
          width={500}
          alt='logo'
        />
      </Grid>
      <h5 className={classes.title}>Tweet Finder Tool</h5>
      <h5 className={classes.subTitle}>Search by Keyword</h5>
    </div>
  );
}
