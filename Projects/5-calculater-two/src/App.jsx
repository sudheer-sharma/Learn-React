import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Diplay from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  let [calval, setCalVal] = useState("");

  let onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calval);
      setCalVal(result);
    } else {
      let newbuttonText = calval + buttonText;
      setCalVal(newbuttonText);
    }
  };

  return (
    <>
      <center>
        <h1>Calculater</h1>
        <div className={styles.calcilater}>
          <Diplay DisplayValue={calval} />
          <ButtonContainer onButtonClick={onButtonClick} />
        </div>
      </center>
    </>
  );
}

export default App;
