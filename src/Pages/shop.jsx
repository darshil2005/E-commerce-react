import React from 'react'
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import NewColletions from '../components/NewColletions/NewColletions';
import NewsLetter from '../components/NewsLetter/NewsLetter';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewColletions/>
      <NewsLetter/>
    </div>
  )
}

export default Shop;
