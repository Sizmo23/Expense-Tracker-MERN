import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useglobalcontext } from "../Context/globalcontext";
import ExpenseForm from "./ExpenseForm";
import Incomeitem from "../Incomes/IncomeItem";

const ExpensesStyled = styled.div`
  display: flex;
  overflow: scroll;
  overflow-x: hidden;
  .total-Expenses {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .Expenses-content {
    display: flex;
    gap: 2rem;
    .Expenses {
      flex: 1;
    }
  }
`;

const format = (date) => {
  const datePart = date.split("T")[0];

  const timePart = parseInt(date.split("T")[1].split(":")[0], 10);

  let formattedTime;
  if (timePart >= 12) {
    formattedTime = `${timePart === 12 ? timePart : timePart - 12} PM`;
  } else {
    formattedTime = `${timePart === 0 ? 12 : timePart} AM`;
  }

  return `${datePart} at ${formattedTime}`;
};

const Expenses = () => {
  const {
    addExpenses,
    getExpenses,
    expenses,
    deleteExpenses,
    totalExpenses,
    counter
  } = useglobalcontext();

  const ExpensesList = Array.isArray(expenses.Expenses)
    ? expenses.Expenses
    : [];
  useEffect(() => {
    getExpenses();
  }, [counter]);
  return (
    <ExpensesStyled>
      <InnerLayout>
        <center>
          <h1> Expenses </h1>
        </center>
        <h2 className="total-Expenses">
          Total Expenses: <span>${totalExpenses()}</span>
        </h2>
        <div className="Expenses-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="Expenses">
            {ExpensesList.map((Expenses) => {
              const { _id, title, amount, date, category, description, type } =
                Expenses;
              return (
                <Incomeitem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={format(date)}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpenses}
                ></Incomeitem>
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpensesStyled>
  );
};

export default Expenses;
