import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

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
  const colors = [
    { card: "bg-red-200", progress: "bg-red-400" },
    { card: "bg-yellow-200", progress: "bg-yellow-400" },
    { card: "bg-green-200", progress: "bg-green-400" },
    { card: "bg-blue-200", progress: "bg-blue-400" },
    { card: "bg-indigo-200", progress: "bg-indigo-400" },
    { card: "bg-purple-200", progress: "bg-purple-400" },
    { card: "bg-pink-200", progress: "bg-pink-400" },
    { card: "bg-orange-200", progress: "bg-orange-400" },
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
        color: getRandomElement(colors),
      },
    };
    setCards([...cards, newCard]);
  };

  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="App">
      <div className="m-6">
        <h2 className="text-2xl flex justify-between m-8">
          <div>
            Projects{" "}
            <button onClick={addCard}>
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </button>
          </div>
          <div>{getCurrentDate().dayMonth}</div>
        </h2>
        <div className="flex gap-4 flex-wrap m-auto w-[90%]">
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
