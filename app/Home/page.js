"use client";
import * as React from 'react';
import NavLogin from '../components/Nav/NavLogin';
import Carousel from '../components/carousel/carousel';
import CardsComponetCategory from '../components/Carts/CardsComponetCategory';
import { Typography } from '@mui/material';
import ComponentHomeCategory from '../components/Category/componentHomeCategory';


export default function Home() {
  return (
    <div>
      <NavLogin/>
      <Carousel/>
      
      
      <CardsComponetCategory/>
      <ComponentHomeCategory/>
    </div>
  );
}