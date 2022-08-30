import { useReducer, useCallback, useEffect } from "react";
import deepequal from "fast-deep-equal/es6";
function modifyReducer(reducer) {
  return (state, action) => {
    switch (action.type) {
      case "persist":
        return action.payload;
      default:
        return reducer(state, action);
    }
  };
}
export default function usePersitedReducer(reducer, initialState) {
  const key = reducer.name;
  const modifiedReducer = useCallback(modifyReducer(reducer), [reducer]);
  const [state, dispatch] = useReducer(modifiedReducer, initialState);
  useEffect(() => {
    let history = localStorage.getItem(key);
    console.log("i am being triggered");
    if (!history) {
      localStorage.setItem(key, JSON.stringify(state));
      history = localStorage.getItem(key);
    } else {
      dispatch({ type: "persist", payload: JSON.parse(history) });
    }
  }, [key, modifiedReducer]);
  useEffect(() => {
    if (!deepequal(initialState, state)) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state]);
  return [state, dispatch];
}
