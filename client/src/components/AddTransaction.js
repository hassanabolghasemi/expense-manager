import React from 'react';

export const AddTransaction = () => {
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
      <form>
        <div className='inc-exp-toolbar'>
          <input type='radio' id='income' name='inc-exp' value='income' />
          <label htmlFor='income' className='inc-label'>
            درآمد
          </label>

          <input type='radio' id='expense' name='inc-exp' value='expense' />
          <label htmlFor='expense' className='exp-label'>
            هزینه
          </label>
        </div>

        <div>
          <label htmlFor='text'>عنوان</label>
          <input type='text' id='text' placeholder='عنوان را وارد نمایید...' />
        </div>

        <div>
          <label htmlFor='amount'>مقدار</label>
          <input
            type='number'
            id='amount'
            placeholder='مقدار را وارد نمایید...'
          />
        </div>

        <button className='btn'>افزودن</button>
      </form>
    </div>
  );
};
