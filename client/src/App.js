import React from 'react';
import { Header } from './components/Header';
import { AddTransaction } from './components/AddTransaction';
import { ShowTransactions } from './components/ShowTransactions';
import { MobileAdd } from './components/MobileAdd';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <AddTransaction />
        <ShowTransactions />
        <MobileAdd />
      </div>
    </div>
  );
}

export default App;
