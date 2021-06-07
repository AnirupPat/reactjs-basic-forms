import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const inputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  // const [eneteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const eneteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInValid = !eneteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!eneteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(inputRef.current.value);
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          ref={inputRef}
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
        />
        {nameInputIsInValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
