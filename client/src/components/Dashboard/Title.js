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
      fontSize: '60px',
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: '15px',
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.titleDiv}>
      <h1 className={classes.finchTitle}>finch</h1>
      <h5 className={classes.subTitle}>Twitter Analytics Tool</h5>
    </div>
  );
}
