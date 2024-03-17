import Buttons from "./Component/Buttons";
import Display from "./Component/Display";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <Buttons />
    </div>
  );
}

export default App;
