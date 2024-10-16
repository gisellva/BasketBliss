"use client";
import React from 'react'
import Navlogged from '../components/Nav/Navlogged';

import Footer from '../components/Footer';
import LoginForm from '../components/LoginComponets/LoginForm';


export default function Login() {
  return (
    <div>
    <Navlogged/>
    <LoginForm/>
    <Footer/>
    </div>
  )
}
