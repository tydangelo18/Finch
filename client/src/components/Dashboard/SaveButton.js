import React, { Component } from 'react';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';

class SaveButton extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div className='saveBtn'>
        <button className='btn' onClick={handleClick}>
          <TurnedInNotOutlinedIcon />
        </button>
      </div>
    );
  }
}

export default SaveButton;
