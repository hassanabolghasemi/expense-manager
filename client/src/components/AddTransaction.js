import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [incExp, setIncExp] = useState('income');
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      isIncome: incExp === 'income' ? true : false,
    };

    addTransaction(newTransaction);
    setIncExp('income');
    setText('');
    setAmount(0);
    closeAddForm();
  };

  const closeAddForm = () => {
    document.querySelector('.add-trans').classList.remove('disp-block');
    document.querySelector('.show-trans').classList.remove('disp-none');
    document.querySelector('.add-mobile').classList.remove('disp-none');
  };

  return (
    <div className='add-trans'>
      <h3>افزودن</h3>
      <button className='exit-add-form' onClick={closeAddForm}>
        x
      </button>
      <form onSubmit={onSubmit}>
        <div className='inc-exp-toolbar'>
          <input
            type='radio'
            id='income'
            name='inc-exp'
            value='income'
            checked={incExp === 'income'}
            onChange={() => setIncExp('income')}
          />
          <label htmlFor='income' className='inc-label'>
            درآمد
          </label>

          <input
            type='radio'
            id='expense'
            name='inc-exp'
            value='expense'
            checked={incExp === 'expense'}
            onChange={() => setIncExp('expense')}
          />
          <label htmlFor='expense' className='exp-label'>
            هزینه
          </label>
        </div>

        <div>
          <label htmlFor='text'>عنوان</label>
          <input
            type='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='عنوان را وارد نمایید...'
          />
        </div>

        <div>
          <label htmlFor='amount'>مقدار</label>
          <input
            type='number'
            id='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='مقدار را وارد نمایید...'
          />
        </div>

        <button className='btn'>افزودن</button>
      </form>
    </div>
  );
};
