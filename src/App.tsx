import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useAppDispatch } from './app/hooks';
import { ForgotPassword } from './features/auth/login/forgotPassword';
import { SigninUser } from './features/auth/signin/signin';
import { Blog } from './features/pages/blog/blog';
import { getBlog } from './features/pages/blog/blogSlice';
import { getAllCate } from './features/pages/categories/categoriesSlice';
import { Gallery } from './features/pages/gallery/gallery';
import { getGallery } from './features/pages/gallery/gallerySlice';
import { getBooking } from './features/pages/homePage/bookingView/bookingSlice';
import { Layout } from './features/pages/homePage/home';
import { Service } from './features/pages/service/service';
import { getService } from './features/pages/service/serviceSlice';
import { Account } from './features/pages/user/account';
import { getAccount } from './features/pages/user/accountSlice';


function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBooking());
    dispatch(getService());
    dispatch(getAllCate());
    dispatch(getGallery());
    dispatch(getBlog());
    dispatch(getAccount());
}, [])
  return (
    <Routes>
      <Route path= "/" element = {<Layout />} />
      <Route path= "/reset" element = {<ForgotPassword/>} />
      <Route path="/create" element = {<SigninUser />} />
      <Route path="/blog" element = {<Blog />} />
      <Route path="/service" element = {<Service />} />
      <Route path="/gallery" element = {<Gallery />} />
      <Route path="/account" element = {<Account />} />
    </Routes>
  );
}

export default App;
