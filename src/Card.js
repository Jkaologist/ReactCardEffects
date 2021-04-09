import React, { useState } from "react";

/*
  State -

  Props - 

  Heirarchy -
*/
function Card ({card}) {
  let image = card.data.cards[0].image
  console.log("Card is: " , card);
  return (
    <img src={image} alt="Card Unavailable"/>
  )
}

export default Card;
