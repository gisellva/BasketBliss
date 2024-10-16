"use client";
import React from 'react'
import Navlogged from '../components/Nav/Navlogged';
import RegisterForm from '../components/RegisterComponent/RegisterForm';
import RegisterText from '../components/RegisterComponent/RegisterText';
import Footer from '../components/Footer';

export default function Register() {
  return (
    <div>
    <Navlogged/>
    <RegisterForm/>
    <RegisterText/>
    <Footer/>
    </div>
  )
}
