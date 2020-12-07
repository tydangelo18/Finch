import React, { Component } from 'react';
import TwitterAPI from '../../utils/TwitterAPI';
import PersistentDrawerLeft from './Drawer/Drawer';
import SearchBar from './SearchBar';
import Title from './Title';

class DashboardHome extends Component {
  render() {
    return (
      <div className='dashboardDiv'>
        <Title />
        <TwitterAPI />
      </div>
    );
  }
}

export default DashboardHome;
