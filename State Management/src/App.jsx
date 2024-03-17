import { useState } from "react";
import Container from "./component/Container";
import ErrorMessage from "./component/ErrorMessage";
import FoodInput from "./component/FoodInput";
import FoodItems from "./component/FoodItems";
function App() {
  // let foodItems = ["Dal", "Roti", "Sabji", "Pizza", "Kofta", "gulab", "jamun"];
  const [foodItems, setFoodItems] = useState([]);

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      e.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <FoodInput handleOnKeyDown={handleOnKeyDown} />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
        <h1>Hello Motto</h1>
      </Container> */}
    </>
  );
}

export default App;
