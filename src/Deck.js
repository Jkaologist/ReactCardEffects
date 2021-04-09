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

  async function getATopCard() {
    let deck_id = deck.data.deck_id
    console.log("deck id", deck_id)
    const card = await axios.get(`${API_URL}/${deck_id}/draw/?count=1`)
    setDrawn(drawn => [...drawn, card])
  }

  // Get a deck from the API
  useEffect(() =>{
    async function fetchDeck() {
      const deckData = await axios.get(`${API_URL}/new/shuffle/?deck_count=1`)
      setDeck(deckData);
    }
    fetchDeck();
  }, []);


  // Draw a card from the deck

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
