import styles from "./counter.module.css";
import { counterReducerProps } from "../reducers/count.reducer";

export default function Counter() {
  const [state, dispatch] = counterReducerProps();
  return (
    <div className={`${styles.align}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react-icon" />
      <h1 className={`${styles.header}`}>{state.count}</h1>
      <h3 className={`${styles.header}`}>Counter App</h3>
      <div className={`${styles.btn_group}`}>
        <button //
          onClick={() => dispatch({ type: "INCREASE" })}
          className={`${styles.btn}`}
        >
          Increase
        </button>
        <br />
        <button //
          onClick={() => dispatch({ type: "DECREASE" })}
          className={`${styles.btn}`}
        >
          Decrease
        </button>
      </div>
      <img
        src="https://raw.githubusercontent.com/Rohan-Shakya/Rohan-Shakya/master/images/next_logo.png"
        alt="next-logo"
        width={150}
      />
    </div>
  );
}
