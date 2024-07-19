import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "./ProgressBar";
import Card from "./Card";
import { render } from "@testing-library/react";

function App() {
  const [cards, setCards] = useState([]);

  const titles = [
    "Web Designing",
    "App Development",
    "Data Analysis",
    "Machine Learning",
    "Cyber Security",
  ];
  const subtitles = [
    "Prototyping",
    "Testing",
    "Deployment",
    "Research",
    "Optimization",
  ];

  const getCurrentDate = () => {
    const date = new Date();
    const options = { month: "long", day: "numeric" };
    const dayMonth = date.toLocaleDateString(undefined, options);
    const year = date.getFullYear();
    return { dayMonth, year };
  };

  const getRandomElement = (array) =>
    array[Math.floor(Math.random() * array.length)];

  const addCard = () => {
    const { dayMonth, year } = getCurrentDate();
    const newCard = {
      id: Math.random().toString(),
      content: {
        dayMonth,
        year,
        title: getRandomElement(titles),
        subtitle: getRandomElement(subtitles),
        daysLeft: Math.floor(Math.random() * 10) + 1,
        progress: Math.floor(Math.random() * 100) + 1,
      },
    };
    setCards([...cards, newCard]);
  };

  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id != id));
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
        <div className="flex gap-4 flex-wrap">
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                id={card.id}
                content={card.content}
                onRemove={removeCard}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
