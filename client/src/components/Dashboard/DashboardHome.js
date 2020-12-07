import React, { Component } from 'react';
import TwitterAPI from '../../utils/TwitterAPI';

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
