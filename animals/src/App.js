import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  // initially create an empty animal array
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // we have to use setter method to change state instead of 赋值
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderAnimals = animals.map((animals, index) => {
    return <AnimalShow type={animals} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add animal!</button>
      <div className="animal-list">{renderAnimals}</div>
    </div>
  );
}

export default App;
