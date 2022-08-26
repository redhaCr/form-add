import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HallOfFame from "./components/Expenses/HallOfFame";
import NewExpense from "./components/NewExpense/NewExpense";
import format from "./components/NewExpense/ExpenseDate";

const DAMMY_EXPENSES = [
  {
    id: "e1",
    name: "redha CR",
    mail: "redha.cr@gmail.com",
    date: format(new Date(1998, 10, 10)),
    description: "iam ISTP",
  },
  {
    id: "e2",
    name: "chris CR",
    mail: "chris.cr@gmail.com",
    date: format(new Date(1997, 7, 8)),
    description: "iam ENTP",
  },
  {
    id: "e3",
    name: "mark CR",
    mail: "mark.cr@gmail.com",
    date: format(new Date(2001, 5, 16)),
    description: "iam ENTP",
  },
  {
    id: "e4",
    name: "sam",
    mail: "sam.cr@gmail.com",
    date: format(new Date(2003, 9, 9)),
    description: "iam INFP",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DAMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <HallOfFame items={expenses} />
    </div>
  );
};

export default App;
