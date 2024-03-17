import Buttons from "./Component/Buttons";
import Display from "./Component/Display";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calValue, setCalValue] = useState("");
  const handler = (buttonValue) => {
    if (buttonValue === "C") {
      setCalValue("");
    } else if (buttonValue === "=") {
      let newValue = eval(calValue);
      setCalValue(newValue);
    } else {
      const newDisplayValue = calValue + buttonValue;
      setCalValue(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calValue} />
      <Buttons handlerFun={handler} />
    </div>
  );
}

export default App;
