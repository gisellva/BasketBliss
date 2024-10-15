"use client";
import * as React from 'react';
import NavLogin from '../components/Nav/NavLogin';
import Carousel from '../components/HomeComponest/carousel/carousel';
import CardsComponetCategory from '../components/HomeComponest/CardsComponetCategory';
import { Anchetas } from '../arrays';
import HomeFavorites from '../components/HomeComponest/HomeFavorites';
import HomeLatestProducts from '../components/HomeComponest/HomeLatestProducts';
import HomeWhyChooseUs from '../components/HomeComponest/HomeWhyChooseUs';
import Footer from '../components/Footer';




export default function Home() {
  return (
    <div>
      <NavLogin/>
      <Carousel/>
      <CardsComponetCategory items={Anchetas}/>
      <HomeFavorites/>
      <HomeLatestProducts/>
      <HomeWhyChooseUs/>
      <Footer/>
    </div>
  );
}