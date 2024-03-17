import styles from "./Buttons.module.css";
import PropTypes from "prop-types";

const Buttons = ({ handlerFun }) => {
  const buttonNames = [
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
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
          onClick={() => handlerFun(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
Buttons.propTypes = {
  handlerFun: PropTypes.func.isRequired,
};
export default Buttons;
