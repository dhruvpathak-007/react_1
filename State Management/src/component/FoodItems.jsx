/* eslint-disable react/prop-types */
import { useState } from "react";
import Items from "./Items";

function FoodItems({ items }) {
  let [activeItems, setActiveItems] = useState([]);
  const handleBuy = (ite) => {
    let newItems = [...activeItems, ite];
    setActiveItems(newItems);
  };
  return (
    <>
      <ul className="list-group">
        {items.map((items) => (
          <Items
            key={items}
            ite={items}
            handleBuy={(events) => handleBuy(items, events)}
            bought={activeItems.includes(items)}
          />
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
