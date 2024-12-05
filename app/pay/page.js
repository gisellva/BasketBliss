"use client";

import NavLogin from '../components/Nav/NavLogin'
import Footer from '../components/Footer'
import CheckoutPage from '../components/PayComponest/CheckoutPage';


export default function page() {
  return (
    <div>
      <NavLogin/>
      
     <CheckoutPage/>
     
      <Footer/>
    </div>
  );
}