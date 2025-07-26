import FoodeItem from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodeItem = [
    "kailash",
    "hiwagma",
    "sacni nagar",
    "sudheer",
    "rahul bhadoriya",
    "pravin haththa",
    "mantu mrval",
    "deepak sukkla",
  ];

  return (
    <>
      <h1 className="headers">Healthy Food</h1>
      <FoodeItem items={foodeItem} />
      <ErrorMessage items={foodeItem} />
    </>
  );
}

export default App;
