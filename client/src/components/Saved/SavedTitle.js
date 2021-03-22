import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

export default function SavedTitle() {
  // Style Hook
    // Using Breakpoints for mobile responsiveness of 'My Saved Tweets' title
  const useStyles = makeStyles((theme) => ({
    savedTitleDiv: {
      padding: '10px',
    },
    savedTitle: {
      color: '#247B7B',
      fontFamily: 'Pacifico',
      fontSize: '50px',
      WebkitTextFillColor: 'white',
      WebkitTextStrokeWidth: '1.25px',
      WebkitTextStrokeColor: '#247B7B',
      textShadow: '.5px .5px 0 #247B7B',
      marginBottom: '10px',
      marginTop: '0px',
      [theme.breakpoints.down("sm")]: {
        fontSize: '30px',
      }
    },
  }));
  // Call Style Hook
  const classes = useStyles();
  return (
    <div className={classes.savedTitleDiv}>
      <Grid container>
        <h3 className={classes.savedTitle}>My Saved Tweets</h3>
      </Grid>
      <Divider />
    </div>
  );
}
