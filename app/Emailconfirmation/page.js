"use client";
import React from 'react'
import NavLogin from '../components/Nav/NavLogin'
import Footer from '../components/Footer'
import EmailComponet from '../components/EmailConfirmationComponets/EmailComponet'

export default function Emailconfirmation() {
  return (
    <div>
        <NavLogin/>
        <EmailComponet/>
        <Footer/>
    </div>
  )
}
