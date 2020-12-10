import React from 'react';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import { Grid, InputAdornment } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {}, // a style rule
  label: {}, // a nested style rule
});

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <Grid container style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={6}>
        <img
          src='https://bityl.co/3rdm'
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          alt='twitterpic'
        />
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={6}
        alignItems='center'
        direction='column'
        justify='space-between'
        style={{ padding: 10 }}
      >
        <div />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 300,
            minWidth: 200,
          }}
        >
          <Grid container justify='center'>
            <img
              src='https://cdn.dribbble.com/users/180062/screenshots/5623548/finch.png'
              width={400}
              alt='logo'
            />
          </Grid>
          <TextField
            onChange={this.onChange}
            value={this.state.email}
            errors={errors.email}
            id='email'
            type='email'
            className={classnames('', {
              invalid: errors.email || errors.emailnotfound,
            })}
            label='Email Address'
            margin='normal'
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            onChange={this.onChange}
            value={this.state.password}
            id='password'
            type='password'
            className={classnames('', {
              invalid: errors.password || errors.passwordincorrect,
            })}
            label='Password'
            margin='normal'
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <LockRounded />
                </InputAdornment>
              ),
            }}
          />
          <div style={{ height: 20 }} />
          <Button color='primary' variant='contained'>
            Log in
          </Button>
          <div style={{ height: 20 }} />
          <Button>Click here to Register</Button>
        </div>
        <div />
      </Grid>
    </Grid>
  );
}
