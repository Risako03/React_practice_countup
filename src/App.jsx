import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/Design";

const App = () => {
  const [num, setNum] = useState(0);
  const [display, setDisplay] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickDisplay = () => {
    setDisplay(!display);
  };

  /* eslint react-hooks/exhaustive-deps: off */
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        display || setDisplay(true); //左がFalseの場合に実行
      } else {
        display && setDisplay(false); //左がtrueの場合に実行
      }
    }
  }, [num]);

  return (
    <>
      <ColorfulMessage color="blue">Number</ColorfulMessage>
      <button onClick={onClickCountUp}>Count Up</button>
      <br />
      <button onClick={onClickDisplay}>ON/OFF</button>
      <p>{num}</p>
      {display && <p>😭</p>}
    </>
  );
};

export default App;
