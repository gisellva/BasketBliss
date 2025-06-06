"use client";
import React from 'react'

import Footer from '../components/Footer';

import NavLogin from '../components/Nav/NavLogin';
import ProfileComponent from '../components/ProfileComponent';


export default function Profile() {
  return (
    <div>
    <NavLogin/>
     <ProfileComponent/>
    <Footer/>
    </div>
  )
}
