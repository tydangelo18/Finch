import React from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SavedLink from '../Saved/SavedLink';

export default function SearchBar(props) {
  // Style Hook
  const useStyles = makeStyles({
    textField: {
      width: '300px',
    },
    searchDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });
  const classes = useStyles();
  return (
    <div className='searchBar'>
      <form
        onSubmit={props.handleSubmit}
        action=''
        className={classes.searchDiv}
      >
        <TextField
          className={classes.textField}
          onChange={props.handleChange}
          type='text'
        />
        <div className='btnDiv'>
          <Button className='searchBtn' type='submit'>
            <SearchOutlinedIcon style={{ color: '#247B7B' }} />
          </Button>
          <Button className='savedTweetsLink'>
            <SavedLink />
          </Button>
        </div>
      </form>
    </div>
  );
}
