import React from 'react';

function Card() {
  const [fruits, setFruits] = React.useState([
    { id: '1', name: 'Mainle', isFavorite: false },
    { id: '2', name: 'Peach', isFavorite: true },
    { id: '3', name: 'Strawberry', isFavorite: false },
  ]);
 
  function handleClick(item) {
    const newFruits = fruits.map((fruit) => {
      if (fruit.id === item.id) {
        return {
          id: fruit.id,
          name: fruit.name,
          isFavorite: !fruit.isFavorite,
        };
      } else {
        return fruit;
      }
    });
 
    setFruits(newFruits);
  }
 
  return (
    <div className="main">
      <h3>with no styling</h3>
 
      <Basket items={fruits} onClick={handleClick} />
    </div>
  );
}
 
function Basket({ items, onClick }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button className="button" type="button" onClick={() => onClick(item)}>
            {item.isFavorite ? 'Unlike' : 'Like'}
          </button>
        </li>
      ))}
    </ul>
  );
}
 
export default Card;