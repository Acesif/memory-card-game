import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

const cardImages = [
  {"src":"/images/F-1.png"},
  {"src":"/images/F-2.png"},
  {"src":"/images/W-1.png"},
  {"src":"/images/W-2.png"},
  {"src":"/images/G-1.png"},
  {"src":"/images/G-2.png"},
]

function App() {
  const [card, setCard] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choiceOne,setChoiceOne] = useState(null);
  const [choiceTwo,setChoiceTwo] = useState(null);
  
  const shuffleImg = () =>{
    const shuffledImg = [...cardImages,...cardImages] // spreads two card images object arrays
      .sort(() => Math.random() - 0.5) // randomly sorts the card image objects
      .map((card) => ({ ...card,id: Math.random()}))
  
    setCard(shuffledImg)
    setTurn(0)
  }
  const handleChoice = (chosenCard) => {
    choiceOne? setChoiceTwo(chosenCard) : setChoiceOne(chosenCard)
  }
  // comparing cards
  useEffect(() => {
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        console.log("match");
      }
      resetTurn();
    }
  },[choiceOne,choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurn((prevTurn) => prevTurn+1)
  }

  return (
    <div className="App">
      <h1>Card Matcheroo</h1>
      <button onClick={shuffleImg}>New Game</button>
      <div className="card-grid">
        {card.map(card => (
          <Card key={card.id} card={card} handleChoice={handleChoice}/>
        ))}
      </div>
    </div>
  );
}

export default App;
