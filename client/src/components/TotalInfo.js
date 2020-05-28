import React from 'react';

export const TotalInfo = () => {
  return (
    <div className='info'>
      <div className='balance'>
        <h4>دارایی شما</h4>
        <h2>1000 تومان</h2>
      </div>
      <div className='inc-exp'>
        <div>
          <h4>درآمد</h4>
          <p className='money plus'>1500 تومان</p>
        </div>
        <div>
          <h4>هزینه</h4>
          <p className='money minus'>500 تومان</p>
        </div>
      </div>
    </div>
  );
};
