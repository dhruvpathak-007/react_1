/* eslint-disable react/prop-types */
import Items from "./Items";

function FoodItems({ items }) {
  const handler = (events, itemsName) => {
    console.log(events);
    console.log(`${itemsName} being bought`);
  };
  return (
    <>
      <ul className="list-group">
        {items.map((items) => (
          <Items key={items} ite={items} exe={handler} />
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
