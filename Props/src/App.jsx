import ErrorMessage from "./component/ErrorMessage";
import FoodItems from "./component/FoodItems";
function App() {
  let foodItems = ["Dal", "Roti", "Sabji", "Pizza", "Kofta", "gulab", "jamun"];
  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
