import Container from "./component/Container";
import CustomFoodItems from "./component/CustomFoodItems";
import ErrorMessage from "./component/ErrorMessage";
import FoodItems from "./component/FoodItems";
function App() {
  let foodItems = ["Dal", "Roti", "Sabji", "Pizza", "Kofta", "gulab", "jamun"];
  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <CustomFoodItems
          handler={(event) => {
            console.log(event.target.value);
          }}
        />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
    </>
  );
}

export default App;
