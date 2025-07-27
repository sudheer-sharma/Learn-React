import FoodeItem from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  let [foodeItems, useFoodItems] = useState([
    "Salad",
    "Green vegetable",
    "Milk",
  ]);

  let handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItems = event.target.value;
      event.target.value = "";
      let newItems = [...foodeItems, newFoodItems];
      useFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-headers">Healthy Food</h1>
        <FoodInput handleKeyDown={handleKeyDown} />
        <ErrorMessage items={foodeItems} />
        <FoodeItem items={foodeItems} />
      </Container>

      {/* <Container>
        <p>
          above is the list of healthy foods that sre good for your health and
          well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
