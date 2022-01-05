import React, { useEffect } from "react";
import ListingCard from "./ListingCard"

function ListingsContainer({cards, setCards}) {

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(json => {
      setCards(json)
    })
  }, [setCards])
  
  function handleDeleteCard(id){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
      .then(setCards(cards.filter(card => card.id !== id)))
  }

  return (
    <main>
      <ul className="cards">
        {
          cards.map(card => 
            <ListingCard 
              key={card.id} 
              id={card.id}
              description={card.description} 
              image={card.image} 
              location={card.location} 
              onDelete={handleDeleteCard}
            />
          )
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
