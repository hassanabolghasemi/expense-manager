import React from 'react';
import { TotalInfo } from './TotalInfo';
import { TransactionList } from './TransactionList';

export const ShowTransactions = () => {
  return (
    <div className='show-trans'>
      <TotalInfo />
      <TransactionList />
    </div>
  );
};
