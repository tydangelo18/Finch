import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import TwitterAPI from '../../utils/TwitterAPI';
import SavedTweets from '../../components/Saved/SavedTweets';
import DashboardHome from '../../components/Dashboard/DashboardHome';
import Button from '@material-ui/core/Button';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { makeStyles } from '@material-ui/core/styles';

function Dashboard(props, onLogoutClick) {
  onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
  };

  const { user } = props.auth;

  // Style Hook
  const useStyles = makeStyles({
    logout: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '10px',
    },
  });
  const classes = useStyles();

  return (
    <div>
      <div className={classes.logout}>
        <button onClick={onLogoutClick}>
          <ExitToAppOutlinedIcon
            fontSize='large'
            style={{ color: '#247B7B' }}
          />
        </button>
      </div>

      <DashboardHome />
    </div>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
