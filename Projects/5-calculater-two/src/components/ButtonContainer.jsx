import styles from "./ButtonContainer.module.css";

let ButtonContainer = () => {
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className={styles.buttoncontainer}>
        {buttonNames.map((buttonNames) => (
          <button key={buttonNames} className={styles.button}>
            {buttonNames}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;
