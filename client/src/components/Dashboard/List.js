import React, { Component } from 'react';
import Card from '../Dashboard/Card';

class List extends Component {
  render() {
    let newArr = [];
    for (let i = 0; i < this.props.users.length; i++) {
      for (let j = 0; j < this.props.tweets.length; j++) {
        if (this.props.tweets[j].author_id === this.props.users[i].id) {
          let tweets = this.props.tweets[j];
          //Object.defineProperty(tweets, "tweet_metrics",
          //   Object.getOwnPropertyDescriptor(tweets, "public_metrics"));
          //   delete tweets["public_metrics"];
          const clone = (obj) => Object.assign({}, obj);
          const renameKey = (object, key, newKey) => {
            const clonedObj = clone(object);
            const targetKey = clonedObj[key];
            delete clonedObj[key];
            clonedObj[newKey] = targetKey;
            return clonedObj;
          };
          tweets = renameKey(tweets, 'public_metrics', 'tweet_metrics');
          let newObj = { ...tweets, ...this.props.users[i] };
          // let newArr = this.props.tweets[j]
          newArr.push(newObj);

          // console.log(newObj);
          // console.log(typeof tweets);
        }
      }
    }
    return (
      <div
        className='list'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {newArr.map((el) => {
          return (
            <div className='tweetCard'>
              <Card
                name={el.name}
                username={el.username}
                pic={el.profile_image_url}
                following={el.public_metrics.following_count}
                followers={el.public_metrics.followers_count}
                userTweet={el.public_metrics.tweet_count}
                tweet={el.text}
                date={el.created_at}
                likes={el.tweet_metrics.like_count}
                retweets={el.tweet_metrics.retweet_count}
                replies={el.tweet_metrics.reply_count}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
