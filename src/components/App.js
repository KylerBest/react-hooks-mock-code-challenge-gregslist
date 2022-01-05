import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState("")

  const shownCards = cards.filter(card => card.description.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header
        search={search}
        setSearch={setSearch}
      />
      <ListingsContainer 
        cards={shownCards}
        setCards={setCards}
      />
    </div>
  );
}

export default App;
