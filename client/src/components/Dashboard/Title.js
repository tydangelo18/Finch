import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function Title() {
  // Style Hook
  const useStyles = makeStyles({
    titleDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Montserrat',
    },
    finchTitle: {
      fontSize: '65px',
      WebkitTextFillColor: 'white',
      WebkitTextStrokeWidth: '2px',
      WebkitTextStrokeColor: '#247B7B',
      textShadow: '2px 2px 0 #247B7B',
    },
    subTitle: {
      fontSize: '18px',
      color: '#0D5C63',
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.titleDiv}>
      <h1 className={classes.finchTitle}>finch</h1>
      <h5 className={classes.subTitle}>Tweet Finder Tool</h5>
    </div>
  );
}
