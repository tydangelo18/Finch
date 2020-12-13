import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';

const SaveButton = (props) => {
  const { handleClick } = props;
  return (
    <div className='saveBtn'>
      <button
        className='btn'
        onClick={(e) => {
          handleClick(e);
          setAlert();
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
