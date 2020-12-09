import React, { Component } from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

class DeleteButton extends Component {
  render() {
    const { handleDelete } = this.props;
    return (
      <div className='deleteBtn'>
        <button className='btn' onClick={handleDelete}>
          <DeleteForeverOutlinedIcon />
        </button>
      </div>
    );
  }
}

export default DeleteButton;
