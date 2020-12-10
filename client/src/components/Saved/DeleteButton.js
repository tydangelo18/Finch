import React from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

export default function DeleteButton(props) {
  const { handleDelete, eventId } = props;
  return (
    <div className='deleteBtn'>
      <button className='btn' onClick={() => handleDelete(eventId)}>
        <DeleteForeverOutlinedIcon />
      </button>
    </div>
  );
}
