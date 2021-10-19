import { useState } from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [input, setInput] = useState("");
  const toggleCounterHandler = () => {
    setShowBtn((showBtn) => !showBtn);
  };
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(input)
    dispatch({ type: "INCREASE",payload : input })
    setInput('')
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {showBtn && (
        <div className={classes["btn-container"]}>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            Decrement
          </button>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>
            Increment
          </button>
          <form onSubmit = {submitHandler}>
            <input
              placeholder="Enter increment value"
              value={input}
              type="number"
              onChange={(e) => setInput(parseInt(e.target.value))}
            ></input>
            <button type = 'submit'>Submit</button>
          </form>
        </div>
      )}

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
