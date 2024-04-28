import React from 'react';
import Advertising from './components/cards/Advertising';

function App() {

  return (
    <div className='min-h-screen bg-amber-50 md:p-2 p-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-start'>
      <Advertising />
      <Advertising />
      <Advertising />
      <Advertising />
      <Advertising />
      <Advertising />
      <Advertising />
    </div>
  );
}

export default App;
