import React from 'react';
import axios from 'axios';
import SaveButton from './SaveButton';
import { Grid, makeStyles } from '@material-ui/core';

export default function Card(props, state, handleClick) {
  // declare responses as a variable
  // set state with repsonses

  const {
    tweet,
    date,
    likes,
    retweets,
    replies,
    name,
    username,
    pic,
    following,
    followers,
    userTweet,
  } = props;

  state = {
    tweet,
    date,
    likes,
    retweets,
    replies,
    name,
    username,
    pic,
    following,
    followers,
    userTweet,
  };

  handleClick = (event) => {
    event.preventDefault();

    axios({
      url: '/api/tweets/saved',
      method: 'POST',
      data: props,
    })
      .then(() => {
        console.log('Data sent to server!');
      })
      .catch(() => {
        console.log('Server Error');
      });
  };

  // Style Hook
  const useStyles = makeStyles({
    twitterCardDiv: {
      border: '1.2px solid #0D5C63',
      padding: '10px',
      maxWidth: 400,
      boxShadow: '2px 2px 15px #247B7B',
    },
    cardDiv: {
      margin: '25px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    card: {
      flex: '0 32%',
      height: '100px',
      marginBottom: '2%',
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.cardDiv}>
      <Grid container direction='column' className={classes.twitterCardDiv}>
        <Grid container justify='center'>
          <img className='pic' src={props.pic} alt=''></img>
        </Grid>
        <Grid container justify='center'>
          <h2 className='name'>{props.name}</h2>
        </Grid>
        <Grid container justify='center'>
          <h6 className='userName'>@{props.username}</h6>
        </Grid>
        <Grid container justify='center'>
          <p className='following'>{props.following} Following</p>
          <p className='followers'>{props.followers} Followers</p>
          <p className='userTweet'>{props.userTweet} Tweets</p>
        </Grid>
        <Grid container justify='center'>
          <p className='tweet'>{props.tweet}</p>
        </Grid>
        <Grid container justify='center'>
          <p className='likes'>{props.likes} Likes</p>
          <p className='retweets'>{props.retweets} Retweets</p>
          <p className='replies'>{props.replies} Replies</p>
        </Grid>
        <Grid container justify='center'>
          <p className='date'>{props.date}</p>
        </Grid>
        <Grid container justify='center'>
          <SaveButton handleClick={handleClick} />
        </Grid>
      </Grid>
    </div>
  );
}
