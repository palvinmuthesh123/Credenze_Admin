import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homes from '../screens/Homes/HomePage';
import MyCart from '../screens/MyCart/MyCart';
import MyCart1 from '../screens/MyCart1/MyCart1';
import ProductDetail from '../screens/ProductDetail/ProductDetail';
import ProductList from '../screens/ProductList/ProductList';
import ProductList1 from '../screens/ProductList1/ProductList';
import UserCart from '../screens/UserCart/UserCart';
import AfterPurchase from '../screens/AfterPurchase/AfterPurchase';
import OTPVerification from '../screens/OtpVerification/OtpVerification';
import ProfileDetails from '../screens/ProfileDetails/ProfileDetails';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Homes} />
        <Route path="/mycart" Component={MyCart} />
        <Route path="/mycart1" Component={MyCart1} />
        <Route path="/productdetail" Component={ProductDetail} />
        <Route path="/productlist" Component={ProductList} />
        <Route path="/productlist1" Component={ProductList1} />
        <Route path="/usercart" Component={UserCart} />
        <Route path="/afterpurchase" Component={AfterPurchase} />
        <Route path="/otpverification" Component={OTPVerification}/>
        <Route path="/profiledetails" Component={ProfileDetails}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;