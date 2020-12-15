import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const DeleteButton = (props) => {
  // Destructure handleClick and setAlert so that we can pass them in as props in the onClick function
  const { handleDelete, eventId, setAlert } = props;
  return (
    <div className='deleteBtn'>
      <button
        className='btn'
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
