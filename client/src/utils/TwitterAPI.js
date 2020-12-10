import React, { Component } from 'react';
import axios from 'axios'
import SearchBar from '../components/Dashboard/SearchBar';
import List from '../components/Dashboard/List';

class TwitterAPI extends Component {
    constructor(props) {
        super(props)
        // Initial State
        // Tweet Array
        // Users Array
        // Search Value Input String
        this.state = {
            tweets: [],
            users: [],
            searchVal: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Search Methods
    
    handleChange(event){
        this.setState({...this.state,searchVal: event.target.value })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.searchVal);
        axios.get(`/api/gettweets?searchVal=${this.state.searchVal}`).then(res => {
            // console.log(res)
            // Set Initial State
            // State of Tweets Object Array
            // State of Users Object Array
        this.setState({
            ...this.state,tweets:res.data.data,users:res.data.includes.users
        })

        // Log the Tweet & User arrays
        console.log('Twitter Response: ', this.state.tweets, this.state.users);
    })
    }

    render() {
        return (
            <div className="twitterAPI">
                <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <List tweets={this.state.tweets} users={this.state.users} />
            </div>
        )
    }
}

export default TwitterAPI;