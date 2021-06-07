import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const inputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [eneteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if(enteredName.trim() === "") {
      setEnteredNameIsValid(true);
      return;
    }
    setEnteredNameIsValid(false);
    console.log(enteredName);
    console.log(inputRef.current.value);
    setEnteredName('');
  };

  const nameInputClasses = eneteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          ref={inputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
        {!eneteredNameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
