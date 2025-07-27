import styles from "./FoodInput.module.css";

let FoodInput = ({ handleKeyDown }) => {
  return (
    <>
      <input
        className={styles.FoodInput}
        type="text"
        placeholder="Enter food item here"
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default FoodInput;
