import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import { makeStyles } from '@material-ui/core';

const SaveButton = (props) => {
  // Destructure handleClick and setAlert so that we can pass them in as props in the onClick function
  const { handleClick, setAlert } = props;

  // Style Hook
  const useStyles = makeStyles({
    btn: {
      borderRadius: '15px',
      width: '70px',
      backgroundColor: '#247B7B',
      border: '1px solid #247B7B',
      color: '#ffffff',
    },
  });
  const classes = useStyles();

  return (
    <div className='saveBtn'>
      <button
        className={classes.btn}
        onClick={(e) => {
          handleClick(e);
          setAlert('Tweet Saved! ', 'success');
        }}
      >
        <TurnedInNotOutlinedIcon />
      </button>
    </div>
  );
};

SaveButton.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(SaveButton);
