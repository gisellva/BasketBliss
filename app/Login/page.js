"use client";
import React from 'react'
import Navlogged from '../components/Nav/Navlogged';
import LoginForm from '../LoginComponent/LoginForm';
import LoginText from '../LoginComponent/LoginText';
import Footer from '../components/Footer';


export default function Login() {
  return (
    <div>
    <Navlogged/>
    <LoginForm/>
    <LoginText/>
    <Footer/>
    </div>
  )
}
