import React, { useEffect } from "react";
import AddAdvertising from "./components/pages/AddAdvertising";
import { Route, Routes } from "react-router-dom";
import AdvertisingsList from "./components/pages/AdvertisingsList";
import NotFound from "./components/pages/NotFound";
import ShowAdvertising from "./components/pages/ShowAdvertising";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import { useAppDispatch } from "./store/hooks";
import { setProfile } from "./store/slices/profile";

function App() {
  const dispatch = useAppDispatch();

  useEffect(()=> {
    if (localStorage.getItem("login") === "1") {
      dispatch(setProfile(true))
    }
  }, [])

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
