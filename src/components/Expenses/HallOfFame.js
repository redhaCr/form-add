import React, { useState } from "react";

import FameItem from "./FameItem";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./HallOfFame.css";

const HallOfFame = (data) => {
  const [filteredYear, setFilteredYear] = useState("1998");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = data.items.filter((expense) => {
    return expense.date[1].toString() === filteredYear;
  });

  let expensesContent = (
    <p className="expenses-list__fallback"> No content found !!</p>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        name={expense.name}
        mail={expense.mail}
        date={expense.date[0]}
        description={expense.description}
      />
    ));
  }

  return (
    <section>
      <div className="container">
        <FameItem></FameItem>
        <div className="row">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          {expensesContent}
        </div>
      </div>
    </section>
  );
};

export default HallOfFame;
