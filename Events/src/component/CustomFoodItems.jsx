/* eslint-disable react/prop-types */
import styles from "./CustomFoodItems.module.css";
const CustomFoodItems = ({ handler }) => {
  return (
    <input
      type="text"
      className={styles.input}
      onChange={(event) => handler(event)}
    />
  );
};

export default CustomFoodItems;
