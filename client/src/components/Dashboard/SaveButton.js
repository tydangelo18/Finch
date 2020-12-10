import React from 'react';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';

export default function SaveButton(props) {
  const { handleClick } = props;
  return (
    <div className='saveBtn'>
      <button className='btn' onClick={handleClick}>
        <TurnedInNotOutlinedIcon />
      </button>
    </div>
  );
}
