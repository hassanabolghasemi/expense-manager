import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const TotalInfo = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter((transaction) => transaction.isIncome === true)
    .map((income) => income.amount)
    .reduce((acc, item) => (acc += item), 0);

  const expense = transactions
    .filter((transaction) => transaction.isIncome === false)
    .map((expense) => expense.amount)
    .reduce((acc, item) => (acc += item), 0);

  const total = income - expense;

  return (
    <div className='info'>
      <div className='balance'>
        <h4>دارایی شما</h4>
        <h2>{numberWithCommas(total)} تومان</h2>
      </div>
      <div className='inc-exp'>
        <div>
          <h4>درآمد</h4>
          <p className='money plus'>{numberWithCommas(income)} تومان</p>
        </div>
        <div>
          <h4>هزینه</h4>
          <p className='money minus'>{numberWithCommas(expense)} تومان</p>
        </div>
      </div>
    </div>
  );
};
