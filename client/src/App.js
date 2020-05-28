import React from 'react';
import { Header } from './components/Header';
import { AddTransaction } from './components/AddTransaction';
import { ShowTransactions } from './components/ShowTransactions';
import { MobileAdd } from './components/MobileAdd';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <AddTransaction />
        <ShowTransactions />
        <MobileAdd />
      </div>
    </GlobalProvider>
  );
}

export default App;
