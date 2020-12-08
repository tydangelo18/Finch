import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    };
  }

  componentDidMount() {
    //If logged in, redirect to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillRecieveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    console.log('newUser', newUser);
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className='signUpForm' style={{ margin: '15px' }}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />

          <Typography
            component='h4'
            variant='h4'
            style={{ color: '#247B7B', fontFamily: 'Montserrat' }}
          >
            Sign Up
          </Typography>
          <form noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id='name'
                  type='text'
                  className={classnames('', {
                    invalid: errors.name,
                  })}
                  autoComplete='fname'
                  name='name'
                  required
                  fullWidth
                  id='name'
                  label='Name'
                  autoFocus
                  style={{ fontFamily: 'Montserrat' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id='email'
                  type='email'
                  className={classnames('', {
                    invalid: errors.email,
                  })}
                  required
                  fullWidth
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  style={{ fontFamily: 'Montserrat' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id='password'
                  type='password'
                  className={classnames('', {
                    invalid: errors.password,
                  })}
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  autoComplete='current-password'
                  style={{ fontFamily: 'Montserrat' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id='password2'
                  type='password'
                  className={classnames('', {
                    invalid: errors.password2,
                  })}
                  required
                  fullWidth
                  name='password2'
                  label='Re-enter Password'
                  style={{ fontFamily: 'Montserrat' }}
                />
              </Grid>
              <Button
                onClick={this.onSubmit}
                type='submit'
                fullWidth
                variant='contained'
                style={{
                  backgroundColor: '#247B7B',
                  color: '#FFFFFF',
                  fontFamily: 'Montserrat',
                  fontWeight: 'bold',
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </form>
        </Container>
      </div>
    );
  }
}

Register.propType = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
