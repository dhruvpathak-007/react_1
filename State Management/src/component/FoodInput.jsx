import styles from "./FoodInput.module.css";
import PropTypes from "prop-types";
const FoodInput = ({ handleOnKeyDown }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter food here"
      onKeyDown={handleOnKeyDown}
    />
  );
};
FoodInput.propTypes = {
  handleOnKeyDown: PropTypes.func.isRequired,
};
export default FoodInput;
