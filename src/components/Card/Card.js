import React from 'react';
import './Card.scss';
function Card(){
  return(
    <div class="card">
      <span className="copy">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius, maxime quae incidunt sapiente perferendis!
          </h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis numquam, animi nulla placeat error facere saepe voluptate nisi rem doloremque!
        </p>
      </span>
      <div className="bg">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, odio aliquid fugiat fugit quos architecto?</h2>
        <span className="buttons">
          <a className="button" href="">Explore</a>
          <a className="button" href="">Learn More</a>
        </span>
      </div>
    </div>
  )
}
 
export default Card;