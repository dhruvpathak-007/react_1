/* eslint-disable react/prop-types */
import Items from "./Items";

function FoodItems({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.map((items) => (
          <Items key={items} ite={items} />
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
