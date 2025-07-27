import styles from "./Item.module.css";

let Item = ({ foode, bought, handleBuyButton }) => {
  if (handleBuyButton) {
  }

  return (
    <>
      <li
        className={`list-group-item kg-item ${styles["kg-item"]} ${
          bought && "active"
        } `}
      >
        <span className={styles["kg-food"]}>{foode}</span>
        <button
          className={`${styles.button} btn btn-success`}
          onClick={handleBuyButton}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
