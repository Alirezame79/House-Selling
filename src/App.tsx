import React from "react";
import AddAdvertising from "./components/pages/AddAdvertising";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdvertisingsList from "./components/pages/AdvertisingsList";
import NotFound from "./components/pages/NotFound";
import ShowAdvertising from "./components/pages/ShowAdvertising";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
        <Routes>
          <Route path="/" element={<AdvertisingsList />} />
          <Route path="/add-advertising" element={<AddAdvertising />} />
          <Route path="/advertising/:id" element={<ShowAdvertising />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
