import React from 'react';
import axios from 'axios';
import { Grid, makeStyles } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import DeleteButton from './DeleteButton';

export default function SavedCard(props, state) {
  // Destructure Props
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

  // Destructure State
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
    },
    deleteBtn: {
      color: '#247B7B',
    },
  });
  // Call Style Hook
  const classes = useStyles();

  // Delete Tweet Method
  const handleDelete = () => {
    axios({
      url: `/api/tweets/${props.username}`,
      method: 'delete',
      data: state.posts,
    })
      .then(() => {
        console.log('Data Deleted!');
        props.onDeleteCallback();
      })
      .catch((err) => {
        console.log('Server Error!');
        console.log(err);
      });
  };

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
        <Grid item xs={2}>
          <p className={classes.tweetMetrics}>
            <ChatBubbleOutlineIcon /> {props.replies}
          </p>
        </Grid>
        <Grid item xs={2}>
          <p className={classes.tweetMetrics}>
            <RepeatIcon /> {props.retweets}
          </p>
        </Grid>
        <Grid item xs={2}>
          <p className={classes.tweetMetrics}>
            <FavoriteBorderOutlinedIcon /> {props.likes}
          </p>
        </Grid>
        <Grid item xs={3}>
          {
            // Empty Space
          }
        </Grid>
        <Grid item xs={5}>
          {
            // Empty Space
          }
        </Grid>
        <Grid item xs={2} className={classes.deleteBtn}>
          <DeleteButton handleDelete={handleDelete} eventId={props._id} />
        </Grid>
        <Grid item xs={5}>
          {
            // Empty Space
          }
        </Grid>
      </Grid>
    </div>
  );
}
