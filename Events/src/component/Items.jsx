/* eslint-disable react/prop-types */
import styles from "./Items.module.css";
function Items(props) {
  return (
    <li className="list-group-item">
      {props.ite}
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(eventName) => props.exe(eventName, props.ite)}
      >
        Buy
      </button>
    </li>
  );
}
export default Items;
