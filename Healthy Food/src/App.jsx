import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Roti", "Sabji", "Pizza", "Kofta", "gulab", "jamun"];
  // let foodItems = [];

  // if (foodItems.length == 0) {
  //   return <h2>I m hungry</h2>;
  // }
  return (
    <>
      <h1>Healthy Foods</h1>
      {foodItems.length == 0 ? <h1>I m hungry</h1> : null}
      <ul className="list-group">
        {foodItems.map((items) => (
          <li key={items} className="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
