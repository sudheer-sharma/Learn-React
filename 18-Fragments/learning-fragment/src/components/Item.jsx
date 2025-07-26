import styles from "./Item.module.css";

let Item = ({ foode }) => {
  return (
    <>
      <li className={`list-group-item kg-item ${styles["kg-item"]}`}>
        <span className={styles["kg-food"]}>{foode}</span>
      </li>
    </>
  );
};

export default Item;
