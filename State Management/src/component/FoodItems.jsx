/* eslint-disable react/prop-types */
import Items from "./Items";

function FoodItems({ items }) {
  const handleBuy = (ite) => {
    console.log(`${ite} is being bought`);
  };
  return (
    <>
      <ul className="list-group">
        {items.map((items) => (
          <Items key={items} ite={items} handleBuy={handleBuy} />
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
