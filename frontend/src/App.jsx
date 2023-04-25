import { useState } from 'react'

import Infrastructure from './pages/Infrastructure';
import ProtectedRoute from './Utils/ProtectedRoute';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import AboutUs from './pages/AboutUs';
import StaffInfo from './pages/StaffInfo';
import FeeStructure from './pages/FeeStructure';
import Booklist from './pages/Booklist';
import Contact from './pages/Contact';
import Academics from './pages/Academics';
import Mpd from './pages/Mpd';
import Career from './pages/Career';
import Login from './pages/user/Login';
import NotFound from './pages/NotFound';
import UpdatePage from './pages/user/update/UpdatePage';
import { Toaster } from 'react-hot-toast';


function App() {
 

  return (
    <BrowserRouter>
     <Toaster position="bottom-right"/>
    <Navbar />
    <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/about/about-us" element={<AboutUs />} />
        <Route path="/about/staff-information" element={<StaffInfo />} />
        <Route path="/information/mandatory-public-disclosure" element={<Mpd />} />
        <Route path="/information/transport" element={<FeeStructure />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update-page" element={<ProtectedRoute Component={UpdatePage} />} />
        <Route path="/academics/fee-structure" element={<FeeStructure />} />
        <Route path="/academics/booklist" element={<Booklist />} />
        <Route path="/academics/information" element={<Academics />} />
        <Route path="/information/career" element={<Career />} />
        <Route path="/*" element={<NotFound />} />
        {/* <Route path="/products" element={<Product />} />
        <Route path="/books" element={<Books />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/orders" element={<Bag />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/sellerProfile/:id" element={<SellerProfile />} />
        <Route path="/user/updateProfile" element={<UpdateProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
            
        <Route path="/products/add-product" element={<AddProduct />} />
        <Route path="/products/update-product/:id" element={<UpdateProduct />} />
      <Route path="/user/signup" element={<Signup />} />
      <Route path="/user/login" element={<Login />} /> */}
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
