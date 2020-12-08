import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
// import LoginForm from '../../components/Login/form.js';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  Typography,
  Container,
  Box,
  Grid,
  InputAdornment,
} from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles({
//   root: {}, // a style rule
//   label: {}, // a nested style rule
// });

import classnames from 'classnames';

import TwitterAPI from '../../utils/TwitterAPI';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  register = () => {
    this.props.history.push('/register');
  };

  render() {
    const { errors } = this.state;

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
          style={{ padding: 10, backgroundColor: '#FFFFFA' }}
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
                    <EmailOutlinedIcon style={{ color: '#247B7B' }} />
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
                    <LockOutlinedIcon style={{ color: '#247B7B' }} />
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ height: 20 }} />
            <Button
              style={{
                backgroundColor: '#247B7B',
                fontFamily: 'Pacifico',
              }}
              color='primary'
              variant='contained'
              type='submit'
              onClick={this.onSubmit}
            >
              Log in
            </Button>
            <div style={{ height: 20 }} />
            <Grid item>
              Don't have an account?{' '}
              <Link
                onClick={this.register}
                variant='body'
                style={{
                  color: '#247B7B',
                  fontFamily: 'Pacifico',
                }}
              >
                {'Sign Up'}
              </Link>
            </Grid>
          </div>
          <div />
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
