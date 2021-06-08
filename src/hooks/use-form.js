import { useState } from 'react';

const useForm = (checkValidity) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = checkValidity(enteredValue);
    const hasError = !isValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        reset,
        hasError,
        isValid,
        valueChangeHandler,
        inputBlurHandler
    }
}

export default useForm;