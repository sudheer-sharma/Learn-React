import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Diplay from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  return (
    <>
      <center>
        <h1>Calculater</h1>
        <div className={styles.calcilater}>
          <Diplay />
          <ButtonContainer />
        </div>
      </center>
    </>
  );
}

export default App;
