import React from 'react';
import './Main.scss';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import Gallery from '../Gallery/Gallery'
function Main() {
return(
    <div className="main">
      <Hero/>
      <Card/>
      <Gallery/>
    </div>
  )
}
 
export default Main;