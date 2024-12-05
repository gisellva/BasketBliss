"use client";
import React from 'react'

import RegisterForm from '../components/RegisterComponent/RegisterForm';
import RegisterText from '../components/RegisterComponent/RegisterText';
import Footer from '../components/Footer';

import Navlogged from '../components/Nav/Navlogged';

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
