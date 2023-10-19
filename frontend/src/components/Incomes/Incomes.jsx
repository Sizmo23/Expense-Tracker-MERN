import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useglobalcontext } from "../Context/globalcontext";
import Form from "../form/form.jsx";
import Incomeitem from "./IncomeItem";

const IncomeStyled = styled.div`
display: flex;
overflow:scroll;
overflow-x:hidden;
.total-income{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: .5rem;
    span{
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--color-green);
    }
}
.income-content{
    display: flex;
    gap: 2rem;
    .incomes{
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

const Income = () => {
  const { addIncome, getIncome, incomes, deleteIncome, totalIncome, counter } = useglobalcontext();

  const incomeList = Array.isArray(incomes.incomes) ? incomes.incomes : [];

  useEffect(() => {
    getIncome();
  }, [counter]);

  return (
    <IncomeStyled>
      <InnerLayout>
        <center>
          <h1> Income </h1>
        </center>
        <h2 className="total-income">Total Income: <span>${totalIncome()}</span> </h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomeList.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
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
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
};

export default Income;
