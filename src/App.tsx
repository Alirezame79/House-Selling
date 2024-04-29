import React from 'react';
import AddAdvertising from './components/AddAdvertising';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdvertisingsList from './components/AdvertisingsList';
import NotFound from './components/NotFound';

function App() {

  return (
    <div className='min-h-screen bg-amber-50'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdvertisingsList />} />
          <Route path="/add-advertising" element={<AddAdvertising />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
