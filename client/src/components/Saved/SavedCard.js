import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';

export default function SavedCard(props, state) {
  const {
    pic,
    name,
    username,
    following,
    followers,
    tweets,
    tweet,
    date,
    likes,
    retweets,
    replies,
  } = props;

  state = {
    pic,
    name,
    username,
    following,
    followers,
    tweets,
    tweet,
    date,
    likes,
    retweets,
    replies,
  };

  // Style Hook
  const useStyles = makeStyles({
    twitterCardDiv: {
      border: '1.2px solid #0D5C63',
      padding: '10px',
      maxWidth: 600,
      boxShadow: '2px 2px 15px #247B7B',
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
    },
    userName: {
      fontFamily: 'Helvetica',
      color: '#888888',
    },
    userMetrics: {
      fontFamily: 'Helvetica',
      color: '#888888',
      fontWeight: 'bold',
    },
    tweet: {
      fontFamily: 'Helvetica',
    },
    tweetMetrics: {
      fontFamily: 'Helvetica',
      color: '#888888',
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.cardDiv}>
      <Grid container spacing={1} className={classes.twitterCardDiv}>
        <Grid item xs={1}>
          <img className={classes.pic} src={props.pic} alt=''></img>
        </Grid>
        <Grid item xs={3}>
          <h2 className={classes.name}>{props.name}</h2>
          <h6 className={classes.userName}>@{props.username}</h6>
        </Grid>
        <Grid item xs={6}>
          {
            // Empty Space
          }
        </Grid>
        <Grid item xs={1}>
          {
            // Empty Space
          }
        </Grid>
        <Grid item xs={3}>
          <p className={classes.userMetrics}>{props.following} Following</p>
        </Grid>
        <Grid item xs={3}>
          <p className={classes.userMetrics}>{props.followers} Followers</p>
        </Grid>
        <Grid item xs={3}>
          <p className={classes.userMetrics}>{props.tweets} Tweets</p>
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
        <Grid item xs={3}>
          <p className={classes.tweetMetrics}>
            <ChatBubbleOutlineIcon /> {props.replies}
          </p>
        </Grid>
        <Grid item xs={3}>
          <p className={classes.tweetMetrics}>
            <RepeatIcon /> {props.retweets}
          </p>
        </Grid>
        <Grid item xs={3}>
          <p className={classes.tweetMetrics}>
            <FavoriteBorderOutlinedIcon /> {props.likes}
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
