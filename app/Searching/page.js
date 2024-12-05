"use client";
import React from 'react'
import Navlogged from '../components/Nav/Navlogged';
import Footer from '../components/Footer';
import Searching from '../components/SearchingComponentes/Searching';
import NavLogin from '../components/Nav/NavLogin';

export default function Register() {
  return (
    <div>
    <NavLogin/>
   <Searching/>
    <Footer/>
    </div>
  )
}
