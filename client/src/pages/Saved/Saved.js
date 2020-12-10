import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import SavedTitle from '../../components/Saved/SavedTitle';
import SavedTweets from '../../components/Saved/SavedTweets';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { makeStyles } from '@material-ui/core/styles';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Saved(props, onLogoutClick) {
  onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
  };

  // const { user } = props.auth;

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
          <Link to='/dashboard'>
            <DashboardOutlinedIcon
              fontSize='large'
              style={{ color: '#247B7B' }}
            />
          </Link>
        </Button>
        <button onClick={onLogoutClick}>
          <ExitToAppOutlinedIcon
            fontSize='large'
            style={{ color: '#247B7B' }}
          />
        </button>
      </div>
      <SavedTitle />
      <SavedTweets />
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

export default connect(mapStateToProps, { logoutUser })(Saved);
