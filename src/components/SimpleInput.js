import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredname] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsValud = !enteredNameIsValid && enteredNameTouched;

  const inputNameChangeHandler = (event) => {
    setEnteredname(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    setEnteredname("");

    setEnteredNameTouched(false);
  };

  const nameInputClass = nameInputIsValud
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
        {nameInputIsValud && (
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
