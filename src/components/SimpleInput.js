import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredname] = useState("");

  const inputNameChangeHandler = (event) => {
    setEnteredname(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    setEnteredname("");
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          onChange={inputNameChangeHandler}
          type="text"
          id="name"
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
