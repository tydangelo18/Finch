import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import finchLogo from '../../utils/finch.png';

export default function Title() {
  // Style Hook
  const useStyles = makeStyles((theme) => ({
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
      margin: '0px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '30px',
      },
    },
    subTitle: {
      color: '#247B7B',
      fontFamily: 'Pacifico',
      fontSize: '20px',
      marginBottom: '0px',
    },
  }));
  // Call Style Hook
  const classes = useStyles();

  return (
    <div className={classes.titleDiv}>
      <Grid container justify='center'>
        <img
          src={finchLogo}
          width={500}
          alt='logo'
        />
      </Grid>
      <h5 className={classes.title}>Tweet Finder Tool</h5>
      <h5 className={classes.subTitle}>Search by Keyword</h5>
    </div>
  );
}
