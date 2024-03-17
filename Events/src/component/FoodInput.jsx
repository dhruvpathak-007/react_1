import styles from "./FoodInput.module.css";
import PropTypes from "prop-types";
const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter food here"
      onChange={handleOnChange}
    />
  );
};
FoodInput.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
};
export default FoodInput;
