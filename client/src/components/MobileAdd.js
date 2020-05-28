import React from 'react';

export const MobileAdd = () => {
  const mobileAddFunc = () => {
    document.querySelector('.add-trans').classList.add('disp-block');
    document.querySelector('.show-trans').classList.add('disp-none');
    document.querySelector('.add-mobile').classList.add('disp-none');
  };

  return (
    <button className='add-mobile' onClick={mobileAddFunc}>
      +
    </button>
  );
};
