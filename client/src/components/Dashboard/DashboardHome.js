import React from 'react';
import TwitterAPI from '../../utils/TwitterAPI';
import Title from './Title';

export default function DashboardHome() {
  return (
    <div className='dashboardDiv'>
      <Title />
      <TwitterAPI />
    </div>
  );
}
