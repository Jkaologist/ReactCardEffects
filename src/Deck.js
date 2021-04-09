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
  const [deck, setDeck] = useState(undefined)
  const [drawn, setDrawn] = useState([]);

  // Get a deck from the API
  useEffect(function getDeck() {
    async function fetchDeck() {
      let deckData = await axios.get(`${API_URL}/new/shuffle/?deck_count=1`)
      setDeck(deckData);
    }
    fetchDeck()
  }, []);


  // Draw a card from the deck
  // useEffect(function drawCard() {
  //   async function fetchCard() {
  //     const deck = await axios.get(`${API_URL}/new/shuffle/?deck_count=1`)

  //   }
  // })

  return (
    <div>
      <button>GIMME A CARD!!!!!!</button>
      <div>
        <Card /> 
      </div>
    </div>
  )
}

export default Deck;
