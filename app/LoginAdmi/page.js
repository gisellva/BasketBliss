"use client";
import React from 'react'
import Navlogged from '../components/Nav/Navlogged';
import Footer from '../components/Footer';
import LoginFormAdmi from '../components/LoginComponets/LoginFormAdmi';



export default function Login() {
  return (
    <div>
    <Navlogged/>
    <LoginFormAdmi/>
    <Footer/>
    </div>
  )
}
