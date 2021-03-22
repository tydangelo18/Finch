import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { makeStyles } from '@material-ui/core';

const DeleteButton = (props) => {
  // Destructure handleClick and setAlert so that we can pass them in as props in the onClick function
  const { handleDelete, eventId, setAlert } = props;

  // Style Hook
  const useStyles = makeStyles({
    btn: {
      borderRadius: '15px',
      width: '70px',
      backgroundColor: '#247B7B',
      border: '1px solid #247B7B',
      color: '#ffffff'
    },
  });
  const classes = useStyles();

  return (
    <div className='deleteBtn'>
      <button
        className={classes.btn}
        onClick={() => {
          handleDelete(eventId);
          setAlert('Tweet Deleted! ', 'success');
        }}
      >
        <DeleteForeverOutlinedIcon />
      </button>
    </div>
  );
};

DeleteButton.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(DeleteButton);
