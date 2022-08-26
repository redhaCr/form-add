import React, { useState } from "react";
import ExpenseLeft from "./ExpenseLeft";
import ExpenseRight from "./ExpenseRight";
import HeroCard from "../UI/HeroCard";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseDateHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div>
      {!isEditing && (
        <div className="Add-Expense">
          <button className="btn Btn-Add-Expense" onClick={startEditingHandler}>
            Add New Expense
          </button>
        </div>
      )}
      {isEditing && (
        <HeroCard>
          <ExpenseLeft />
          <ExpenseRight
            onSaveExpenseDate={onSaveExpenseDateHandler}
            onCancel={stopEditingHandler}
          />
        </HeroCard>
      )}
    </div>
  );
};
export default NewExpense;
