import useForm from "../hooks/use-form";

const BasicForm = (props) => {
  const {
    value: nameInputValue,
    reset,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueChangeHandler,
    inputBlurHandler,
  } = useForm(value => value.trim() !== '');

  let formIsValid = false;
  if(nameIsValid) {
    formIsValid = true;
  }

  const nameClass =  nameHasError ? 'form-control invalid' : 'form-control'

  return (
    <form>
      <div className="control-group">
        <div className={nameClass}>
          <label htmlFor="name">First Name</label>
          <input
            value={nameInputValue}
            onChange={valueChangeHandler}
            onBlur={inputBlurHandler}
            type="text"
            id="name"
          />
          {nameHasError && <p className="error-text">Name is not entered</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
