import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if(action.type === 'INPUT') {
    return {
      value: action.value,
      isTouched: state.isTouched
    }
  }
  if(action.type === 'BLUR') {
    return {
      value: state.value,
      isTouched: true
    }
  }
  if(action.type === 'RESET') {
    return {
      value: '',
      isTouched: false
    }
  }

  return inputStateReducer;
};

const useInput = (validateValue) => {

  const [inputState, dispatchHandler] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatchHandler({
      type: "INPUT",
      value: event.target.value
    });
  };

  const inputBlurHandler = (event) => {
    dispatchHandler({
      type: "BLUR"
    });
  };

  const reset = () => {
    dispatchHandler({
      type: "RESET"
    });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
