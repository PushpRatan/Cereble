import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "./ProgressBar";
import Card from "./Card";

function App() {
  const [cards, setCards] = useState([]);
  const addCard = () => {
    const newCard = {
      id: Math.random().toString(),
      content: `Date : ${Math.floor(Math.random() * Date.now())},
                Details: ${Math.random().toString(36)}`,
    };
    setCards([...cards, newCard]);
    console.log(cards);
  };

  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };
  return (
    <div className="App">
      <div className="m-6">
        <h2 className="text-2xl">
          Projects{" "}
          <button onClick={addCard}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        </h2>

        {/* <div>
          {cards.map((card) => {
            <div key={card.id}>
              <h3>
                {card.Date}{" "}
                <button onClick={() => removeCard(card.id)}>X</button>
              </h3>
              <p>{card.content}</p>
              <ProgressBar />
            </div>;
          })}
        </div> */}

        <div>
          {cards.map((card) => {
            return <Card />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
