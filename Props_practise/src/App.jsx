import Container from "./component/Container";
import ErrorMessage from "./component/ErrorMessage";
import FoodItems from "./component/FoodItems";
function App() {
  let foodItems = ["Dal", "Roti", "Sabji", "Pizza", "Kofta", "gulab", "jamun"];
  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      <Container>
        <h1>Hello Motto</h1>
      </Container>
    </>
  );
}

export default App;
