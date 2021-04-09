import React, { useState } from "react";

/*
  State -

  Props - 

  Heirarchy -
*/
function Card ({card}) {
  let image = card.image
  return (
    <img src={image} alt="Card Unavailable"/>
  )
}

export default Card;
