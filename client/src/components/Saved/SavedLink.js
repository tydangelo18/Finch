import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { makeStyles } from '@material-ui/core';

export default function SavedLink() {
  // Style Hook
  const useStyles = makeStyles({
    saved: {
      display: 'flex',
      top: 0,
      right: 0,
      padding: '10px',
      position: 'fixed',
      marginTop: '10px',
    },
  });
  const classes = useStyles();

  return (
    <div classNanme={classes.saved}>
      <Button>
        <Link to='/saved'>
          <SaveOutlinedIcon fontSize='large' style={{ color: '#247B7B' }} />
        </Link>
      </Button>
    </div>
  );
}
