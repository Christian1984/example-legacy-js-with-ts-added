import { useState } from "react";
import { AddButton } from "./AddButton";
import { MinusButton } from "./MinusButton";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>Counter: {counter}</div>
      <AddButton setCounter={setCounter} />
      <MinusButton setCounter={setCounter} />
    </div>
  );
};

export { Counter };
