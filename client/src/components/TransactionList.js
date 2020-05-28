import React from 'react';

export const TransactionList = () => {
  return (
    <div className='history'>
      <h3>تاریخچه</h3>
      <div className='trans-list'>
        <ul id='list' className='list'>
          <li className='minus'>
            پول <span>400 تومان</span>
            <button className='delete-btn'>X</button>
          </li>
          <li className='plus'>
            پول <span>700 تومان</span>
            <button className='delete-btn'>X</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
