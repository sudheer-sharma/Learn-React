import styles from "./Display.module.css";

let Diplay = ({ DisplayValue }) => {
  return (
    <>
      <input
        className={styles.diplay}
        type="text"
        value={DisplayValue}
        readOnly
      />
    </>
  );
};

export default Diplay;
