import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredname] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !validateEmail(enteredEmail) && enteredEmailTouched;

  const inputNameChangeHandler = (event) => {
    setEnteredname(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const inputMailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const mailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    console.log(emailInputIsInvalid);

    if (!enteredNameIsValid || emailInputIsInvalid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredname("");
    setEnteredEmail("");

    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const nameInputClass = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={inputNameChangeHandler}
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>

      <div className={emailInputClass}>
        <label htmlFor="email">Your email</label>
        <input
          onChange={inputMailChangeHandler}
          type="email"
          id="email"
          onBlur={mailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Mail should not be empty</p>
        )}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// add second input
// it should be mail input
// validate the email address
// replicate behaviour of the first input
// form can be submited if BOTH inputs are correct - probably throw some error if not
