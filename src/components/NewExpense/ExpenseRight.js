import React, { useState } from "react";
import "./ExpenseRight.css";
import format from "./ExpenseDate";

const ExpenseRight = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const mailChangeHandler = (event) => {
    setEnteredMail(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      name: enteredName,
      mail: enteredMail,
      date: alert(format(new Date(enteredDate))),
      // date: format(new Date(enteredDate)),
      description: enteredDescription,
    };
    props.onSaveExpenseDate(expenseData);
    setEnteredName("");
    setEnteredMail("");
    setEnteredDate("");
    setEnteredDescription("");
  };
  return (
    <div className="col-lg-8 col-lg-8 absolute" id="absolut">
      <div className="content-right">
        <h1>Introduce Yourself</h1>
        <p>
          Welcome to our first react front and design ,please share with us :)
        </p>
        <form
          className="form-singup"
          action="/singup"
          class="form-singup justify-content-center text-center"
          onSubmit={submitHandler}
        >
          <div>
            <label for="full-name"></label>
            <input
              type="text"
              placeholder="Full-Name"
              name="full-name"
              id="full-name"
              required
              value={enteredName}
              onChange={nameChangeHandler}
            ></input>
          </div>
          <div>
            <label for="email"></label>
            <input
              type="email"
              placeholder="Email address"
              name="email"
              id="email"
              required
              value={enteredMail}
              onChange={mailChangeHandler}
            ></input>
          </div>
          <div>
            <label for="date"></label>
            <input
              type="date"
              placeholder="Date of Birth"
              name="date"
              id="date"
              required
              value={enteredDate}
              onChange={dateChangeHandler}
            ></input>
          </div>
          <div>
            <textarea
              name="descreption"
              id="descreption"
              cols="30"
              rows="4"
              placeholder="Say somthing"
              value={enteredDescription}
              onChange={descriptionChangeHandler}
            ></textarea>
          </div>
          <div className="last-child">
            <button type="submit" className="btn submit">
              Submit
            </button>
            <button className="btn cancel" onClick={props.onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ExpenseRight;
