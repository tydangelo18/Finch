import axios from 'axios';
import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
      <form onSubmit={props.handleSubmit} action='' className={classes.searchDiv}>
        <TextField
          className={classes.textField}
          onChange={props.handleChange}
          type='text'
        />
        <Button className='searchBtn' type='submit'>
          Search
        </Button>
      </form>
    </div>
  );
}
