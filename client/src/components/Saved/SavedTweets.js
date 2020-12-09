import React, { Component } from 'react';
import axios from 'axios';
import DeleteButton from '../Saved/DeleteButton';
import SavedCard from './SavedCard';

class SavedTweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount = () => {
    this.getTweets();
  };

  getTweets = () => {
    axios
      .get('/api/tweets')
      .then((response) => {
        const data = response.data;
        console.log('Data Received!');
        this.setState({ posts: data });
        console.log(this.state.posts);
      })
      .catch(() => {
        console.log('Error with Database!');
      });
  };

  // handleDelete = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.getAttribute("data-id"));
  //   axios({
  //     url: "/api/tweets/:id",
  //     method: "delete",
  //     data: this.state.posts,
  //   })
  //     .then(() => {
  //       console.log("Data Deleted!");
  //     })
  //     .then(() => {
  //       console.log("Data Deleted!");
  //     })
  //     .catch((err) => {
  //       console.log("Server Error!");
  //       console.log(err);
  //     });
  //
  //     <DeleteButton handleDelete={this.handleDelete} data-id={post._id} />
  // };

  render() {
    return (
      <div
        className='savedList'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {this.state.posts.map((post) => (
          <SavedCard
            pic={post.pic}
            name={post.name}
            username={post.username}
            following={post.following}
            followers={post.followers}
            tweets={post.userTweet}
            tweet={post.tweet}
            date={post.date}
            likes={post.likes}
            retweets={post.retweets}
            replies={post.replies}
          />
        ))}
      </div>
    );
  }
}

export default SavedTweets;
