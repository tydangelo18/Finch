import React from 'react';
import TwitterAPI from '../../utils/TwitterAPI';
import Title from './Title';
import Alert from './Alert'

export default function DashboardHome() {
  return (
    <div className='dashboardDiv'>
      <Alert />
      <Title />
      <TwitterAPI />
    </div>
  );
}
