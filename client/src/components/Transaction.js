import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={transaction.isIncome ? 'plus' : 'minus'}>
      {transaction.text}
      <span>{numberWithCommas(transaction.amount)} تومان</span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className='delete-btn'
      >
        X
      </button>
    </li>
  );
};
