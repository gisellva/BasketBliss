"use client";
import React from 'react'
import NavLogin from '../components/Nav/NavLogin'
import Footer from '../components/Footer'
import { ProductCardInformation } from '../components/ProductInformationComponents/ProductCardInformation';
import ProductInformationyoumaybeinterested from '../components/ProductInformationComponents/ProductInformationyoumaybeinterested';

export default function ProductInformation() {
  const productInfo = {
    title: 'Desayuno Sorpresa Para Hombre Elegante',
    price: '$95,000',
    description:
      'Hermoso desayuno sorpresa para hombre elegante, sorpréndelo con un elegante y original recuerdo.',
    contents: [
      'Sandwich de jamón, queso, tocineta y salsa.',
      'Jugo decorado en tarro de vidrio de Naranja.',
      'Un (1) paquete de galletas Oreo.',
      'Fruta entera Manzana.',
      'Parfait de kumis y cereal.',
      'Un (1) cupcake.',
      'Un (1) pancake con crema de chocolate.',
      'Decoración según foto de referencia.',
      'Tarjeta con mensaje personalizado.',
    ],
    imageUrl: 'https://i.pinimg.com/736x/e8/17/cd/e817cd7536a684a293dd1a1025e62319.jpg', 
  };
  return (
    <div>
       <NavLogin/>
       <ProductCardInformation {...productInfo} />
       <ProductInformationyoumaybeinterested/>  
       <Footer/>
    </div>
  )
}
