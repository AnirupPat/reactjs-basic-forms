import useForm from "../hooks/use-form";

const BasicForm = (props) => {
  const {
    value: nameInputValue,
    reset: nameResetHandler,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useForm(value => value.trim() !== '');

  const {
    value: lastnameInputValue,
    reset: lastnameResetHandler,
    hasError: lastnameHasError,
    isValid: lastnameIsValid,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
  } = useForm(value => value.trim() !== '');

  const {
    value: emailInputValue,
    reset: emailResetHandler,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useForm(value => value.includes('@'));

  let formIsValid = false;
  if(nameIsValid && lastnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(!formIsValid) {
      return;
    }
    console.log(nameInputValue);
    console.log(lastnameInputValue);
    console.log(emailInputValue);

    nameResetHandler();
    lastnameResetHandler();
    emailResetHandler();
  }

  const nameClass =  nameHasError ? 'form-control invalid' : 'form-control';
  const lastnameClass =  lastnameHasError ? 'form-control invalid' : 'form-control';
  const emailClass =  emailHasError ? 'form-control invalid' : 'form-control';
  

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameClass}>
          <label htmlFor="name">First Name</label>
          <input
            value={nameInputValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            type="text"
            id="name"
          />
          {nameHasError && <p className="error-text">Name is not entered</p>}
        </div>
        <div className={lastnameClass}>
          <label htmlFor="lastname">Last Name</label>
          <input 
          value={lastnameInputValue}
          onChange={lastnameChangeHandler}
          onBlur={lastnameBlurHandler}
            type="text" 
            id="lastname" />
            {lastnameHasError && <p className="error-text">Last Name is not entered</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input 
          value={emailInputValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="email" 
          id="email" />
          {emailHasError && <p className="error-text">Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
