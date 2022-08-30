import { useReducer } from "react";
import usePersitedReducer from "./persitanceHook";
export default function useActivation(reducer, initialState, persistance) {
  let myReducerHook = null;
  if (persistance) myReducerHook = usePersitedReducer(reducer, initialState);
  else myReducerHook = useReducer(reducer, initialState);
  const [state, dispatch] = myReducerHook;
  return [state, dispatch];
}
