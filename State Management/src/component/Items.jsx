// eslint-disable-next-line react/prop-types
import styles from "./Item.module.css";
function Items({ ite, handleBuy }) {
  return (
    <li className="list-group-item">
      {ite}
      <button
        className={`${styles.button} btn btn-info`}
        onClick={() => handleBuy(ite)}
      >
        Buy
      </button>
    </li>
  );
}
export default Items;
