import React from 'react';
import { Link } from 'react-router-dom';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';

export default function SavedLink() {
  return (
    <div>
      <Link to='#'>
        <SaveOutlinedIcon fontSize='large' style={{ color: '#247B7B' }} />
      </Link>
    </div>
  );
}
