import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";


import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyState from './context/data/myState';
import SignUp from './pages/registration/SignUp';
import Login from './pages/registration/Login';
// import Login from './pages/registration/login';
import ProductInfo from './pages/productinfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';


function App() {
  return (
    <>
    <MyState>
   <Router>
      <Routes>
       <Route path ="/" element={<Home/>} />
       <Route path="/order" element={
        <ProtectedRoute>
          <Order/>
        </ProtectedRoute>
        } />      
       <Route path="/cart" element={<Cart/>} />
       <Route path="/dashboard" element={
         <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
       } />
       <Route path="/login" element={<Login/>} />
       <Route path="/signup" element={<SignUp/>} />
       <Route path="/productinfo/:id" element={<ProductInfo/>} />
       <Route path="/allproducts" element={<Allproducts/>} />

       <Route path="/addproduct" element={
         <ProtectedRoute>
          <AddProduct/>
        </ProtectedRoute>
       } />
       <Route path="/updateproduct" element={
         <ProtectedRoute>
          <UpdateProduct/>
        </ProtectedRoute>
       } />
       <Route path="/*" element={<NoPage/>} />
       </Routes>
       <ToastContainer/>
   </Router>
   </MyState>
    </>
  )
}

export default App


export const ProtectedRoute =({children})=>{
  const user = localStorage.getItem('user');
  if(user){
  return children
  }
  else{
    return<Navigate to ={'/login'}/>
  }
}

const ProtectedRouteForAdmin =({children})=>{
    const admin = JSON.parse(localStorage.getItem('user'));

    if(admin.user.email === 'admin@gmail.com'){
      return children
    }
    else{
      return<Navigate to ={'/login'}/>
    }

}