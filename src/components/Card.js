import React from 'react'
import './Card.css'
export default function Card({card,handleChoice}) {
  
  const handleSelect = () => {
    handleChoice(card)
  }  
  return (
    <div className="card">
        <img width="200rem" src={card.src} alt="card front" className="card-front" />
        <img width="200rem" src="../images/cover.png" alt="card back" onClick={handleSelect} className="card-back" />
    </div>
  )
}
