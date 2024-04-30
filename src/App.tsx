import React from "react";
import AddAdvertising from "./components/pages/AddAdvertising";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdvertisingsList from "./components/pages/AdvertisingsList";
import NotFound from "./components/pages/NotFound";
import ShowAdvertising from "./components/pages/ShowAdvertising";

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdvertisingsList />} />
          <Route path="/add-advertising" element={<AddAdvertising />} />
          <Route path="/advertising/:id" element={<ShowAdvertising />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
