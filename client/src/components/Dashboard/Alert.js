import React from 'react';
import { connect } from 'react-redux';

const Alert = (props) => {
  const { alerts } = props;
  if (alerts !== null && alerts.length > 0) {
    let alertsList;

    alertsList = alerts.map((alert) => {
      return (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
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
