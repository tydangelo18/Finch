import React from 'react';
import PropTypes from 'prop-types';
import SavedLink from '../../components/Saved/SavedLink';
import { connect } from 'react-redux';
import DashboardHome from '../../components/Dashboard/DashboardHome';
import Footer from '../../components/Dashboard/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function Dashboard(props, onLogoutClick) {
  onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
  };



  // Style Hook
  const useStyles = makeStyles({
    logout: {
      display: 'flex',
      top: 0,
      right: 0,
      padding: '10px',
      position: 'fixed',
    },
  });
  const classes = useStyles();

  return (
    <div>
      <div className={classes.logout}>
        <Button>
          <SavedLink />
        </Button>
        
      </div>

      <DashboardHome />
      <Footer />
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

export default connect(mapStateToProps)(Dashboard);
