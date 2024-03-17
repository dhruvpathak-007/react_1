import Container from "./component/Container";
import ErrorMessage from "./component/ErrorMessage";
import FoodInput from "./component/FoodInput";
import FoodItems from "./component/FoodItems";
function App() {
  let foodItems = ["Dal", "Roti", "Sabji", "Pizza", "Kofta", "gulab", "jamun"];
  let textToShow = "Input";

  const handleOnChange = (e) => {
    textToShow = e.target.value;
    console.log(textToShow);
  };

  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <FoodInput handleOnChange={handleOnChange} />
        <p>{textToShow}</p>
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
