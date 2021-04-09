import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const API_URL = "https://deckofcardsapi.com/api/deck/";

/*
  State - Drawn

  Props - No Props

  Heirarchy - Parent of Card, Child of App
*/
function Deck () {
  const [deck, setDeck] = useState(null)
  const [drawn, setDrawn] = useState([]);
  const [getCard, setGetCard] = useState(true)

  function getATopCard() {
    setGetCard((getCard) === !getCard)
  }

  // Get a deck from the API
  useEffect(function getDeck() {
    async function fetchDeck() {
      const deckData = await axios.get(`${API_URL}/new/shuffle/?deck_count=1`)
      setDeck(deckData);
    }
    fetchDeck();
  }, []);
  console.log("SETDECK", deck)

  // Draw a card from the deck
  useEffect(function drawCard() {
    async function fetchCard() {
      console.log(deck)
      let deck_id = deck.data.deck_id
      const card = await axios.get(`${API_URL}/${deck_id}/draw/?count=1`)
      setDrawn(drawn => [...drawn, card])
    }
    fetchCard();
  }, [getCard]);


  return (
    <div>
      <button onClick={getATopCard}>GIMME A CARD!!!!!!</button>
      <div>
        {drawn.map((card) =>
          <Card 
            card={card}/> 
        )}
      </div>
    </div>
  )
}

export default Deck;
