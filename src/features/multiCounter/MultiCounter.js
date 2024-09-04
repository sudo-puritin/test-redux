import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCounter, decrement, increment } from "./action";

const MultiCounter = () => {
  const counters = useSelector((state) => state.multiCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(addCounter())}>Add Counter</button>
      {counters.map((counter, index) => (
        <div key={index}>
          <button onClick={() => dispatch(decrement(index))}>-</button>
          <span>{counter.count}</span>
          <button onClick={() => dispatch(increment(index))}>+</button>
        </div>
      ))}
    </div>
  );
};

export default MultiCounter;
