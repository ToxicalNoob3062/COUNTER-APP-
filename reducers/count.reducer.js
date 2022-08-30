import useActivation from "../hooks/activatorHook";

const initialState = {
  count: 0,
};

const actionTypes = {
  "INCREASE": "INCREASE",
  "DECREASE": "DECREASE",
};

const countReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREASE:
      return { count: state.count + 1 };
    case actionTypes.DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const counterReducerProps = () => {
  return useActivation(countReducer, initialState, true);
};
