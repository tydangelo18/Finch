import React from 'react';
import { connect } from 'react-redux';
import { Grid, makeStyles } from '@material-ui/core';

const Alert = (props) => {
  // Style Hook
  const useStyles = makeStyles({
    alertDiv: {
      backgroundColor: '#247B7B',
      fontSize: '12px',
      color: '#FFFFFA',
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
    },
  });

  const classes = useStyles();
  const { alerts } = props;
  if (alerts !== null && alerts.length > 0) {
    let alertsList;

    alertsList = alerts.map((alert) => {
      return (
        <Grid container spacing={1}>
          <Grid item xs={12} key={alert.id} className={classes.alertDiv}>
            {alert.msg}
          </Grid>
        </Grid>
      );
    });
    return alertsList;
  } else {
    return null;
  }
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
