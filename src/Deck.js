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

  const [shuffle, setShuffle] = useState(true);

  // Draws a card
  async function getATopCard() {
    let deck_id = deck.deck_id
    const card = await axios.get(`${API_URL}/${deck_id}/draw/?count=1`)
    if (card.data.remaining === 0 ) {
      alert("No Mo Cards 4 U")
      document.querySelector("button").remove()
    };
    setDrawn(drawn => [...drawn, card.data.cards[0]])
  }

  async function shuffleDeck() {  
    setShuffle(true)
    setDrawn([])
    let deck_id = deck.deck_id;
    const newDeck = await axios.get(`${API_URL}${deck_id}/shuffle/`)
    setDeck(newDeck.data)
    setShuffle(false)
  }
  // Render a new shuffle button
  function shuffleButton () {
    return (
      <button onClick={shuffleDeck}>SHUFFLE ME</button>
    )
  }

  // Get a deck from the API
  useEffect(() => {
    async function fetchDeck() {
      const deckData = await axios.get(`${API_URL}/new/shuffle/?deck_count=1`)
      setDeck(deckData.data);
      setShuffle(false)
    }
    fetchDeck();
  }, []);
  if (shuffle) { return "Loading..."}

  return (
    <div>
      { shuffleButton() }
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
