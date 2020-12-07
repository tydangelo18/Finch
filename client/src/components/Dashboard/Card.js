import React from 'react';
import axios from 'axios';
import SaveButton from './SaveButton';
import { Grid } from '@material-ui/core'

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

  return (
    <div className='card'>
      <div className='tweet'>
        <img className='pic' src={props.pic} alt=''></img>
        <h2 className='name'>{props.name}</h2>
        <h6 className='userName'>@{props.username}</h6>
        <p className='following'>{props.following} Following</p>
        <p className='followers'>{props.followers} Followers</p>
        <p className='userTweet'>{props.userTweet} Tweets</p>
        <p className='tweet'>{props.tweet}</p>
        <p className='date'>{props.date}</p>
        <p className='likes'>{props.likes} Likes</p>
        <p className='retweets'>{props.retweets} Retweets</p>
        <p className='replies'>{props.replies} Replies</p>
      </div>

      <SaveButton handleClick={handleClick} />
    </div>
  );
}
