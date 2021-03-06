import React from 'react';
import axios from 'axios';
import SaveButton from './SaveButton';
import { Grid, makeStyles } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';

export default function Card(props, state, handleClick) {
  // Destructure Props
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

  // Destructure State
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

  // Save Tweet Method
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
      maxWidth: 480,
      boxShadow: '2px 2px 15px #247B7B',
      fontSize: '12px',
    },
    cardDiv: {
      margin: '25px',
      display: 'flex',
      justifyContent: 'center',
    },
    pic: {
      borderRadius: '50%',
    },
    name: {
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      margin: '0px',
    },
    userName: {
      fontFamily: 'Helvetica',
      color: '#888888',
      fontSize: '15px',
      margin: '0px',
    },
    userMetrics: {
      fontFamily: 'Helvetica',
      color: '#888888',
      fontWeight: 'bold',
      margin: '1px',
    },
    tweet: {
      fontFamily: 'Helvetica',
      marginBottom: '0px',
    },
    tweetMetrics: {
      fontFamily: 'Helvetica',
      color: '#888888',
      margin: '0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    saveBtn: {
      color: '#247B7B',
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.cardDiv}>
      <Grid container spacing={1} className={classes.twitterCardDiv}>
        <Grid item xs={12}>
          <img className={classes.pic} src={props.pic} alt=''></img>
          <div className={classes.userNameDiv}>
            <h2 className={classes.name}>{props.name}</h2>
            <h6 className={classes.userName}>@{props.username}</h6>
          </div>
        </Grid>

        <Grid item xs={3}>
          <p className={classes.userMetrics}>{props.following} Following</p>
        </Grid>
        <Grid item xs={3}>
          <p className={classes.userMetrics}>{props.followers} Followers</p>
        </Grid>
        <Grid item xs={3}>
          <p className={classes.userMetrics}>{props.userTweet} Tweets</p>
        </Grid>
        <Grid item xs={2}>
          {
            // Empty Space
          }
        </Grid>
        <Grid item xs={12}>
          <p className={classes.tweet}>{props.tweet}</p>
        </Grid>
        <Grid item xs={3}>
          {
            // Empty Space
          }
        </Grid>
        <Grid item xs={2}>
          <p className={classes.tweetMetrics}>
            <ChatBubbleOutlineIcon />

            {props.replies}
          </p>
        </Grid>
        <Grid item xs={2}>
          <p className={classes.tweetMetrics}>
            <RepeatIcon />

            {props.retweets}
          </p>
        </Grid>
        <Grid item xs={2}>
          <p className={classes.tweetMetrics}>
            <FavoriteBorderOutlinedIcon />

            {props.likes}
          </p>
        </Grid>
        <Grid item xs={3}>
          {
            // Empty Space
          }
        </Grid>

        <Grid
          item
          xs={12}
          container
          direction='row'
          justify='center'
          className={classes.saveBtn}
        >
          <SaveButton handleClick={handleClick} />
        </Grid>
      </Grid>
    </div>
  );
}
