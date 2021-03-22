import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SavedTitle from '../../components/Saved/SavedTitle';
import SavedTweets from '../../components/Saved/SavedTweets';
import Footer from '../../components/Dashboard/Footer';

import { makeStyles } from '@material-ui/core/styles';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Saved(props, onLogoutClick) {
  onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
  };

  

  // Style Hook
  const useStyles = makeStyles({
    home: {
      display: 'flex',
      top: 0,
      right: 0,
      padding: '10px',
      position: 'fixed',
      marginTop: '10px',
    },
  });
  const classes = useStyles();
  return (
    <div>
      <div className={classes.home}>
        <Button>
          <Link to='/'>
            <DashboardOutlinedIcon
              fontSize='large'
              style={{ color: '#247B7B' }}
            />
          </Link>
        </Button>
      </div>
      <SavedTitle />
      <SavedTweets />
      <Footer />
    </div>
  );
}

Saved.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Saved);
