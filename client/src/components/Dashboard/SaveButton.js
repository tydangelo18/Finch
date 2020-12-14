import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';

const SaveButton = (props) => {
  // Destructure handleClick and setAlert so that we can pass them in as props in the onClick function
  const { handleClick, setAlert } = props;
  return (
    <div className='saveBtn'>
      <button
        className='btn'
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
