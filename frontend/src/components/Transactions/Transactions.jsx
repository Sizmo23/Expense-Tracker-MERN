import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useglobalcontext } from "../Context/globalcontext";

const TransactionsStyled = styled.div`
  display: flex;
  overflow: scroll;
  overflow-x: hidden;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    height: 100vh;
  }
  .total-income {
    background: #fcf6f9;
    height: 100vh;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 1200;
      color: var(--color-green);
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;

const Transactions = () => {
  const {editIncome, editExpenses, deleteIncome, deleteExpenses, getIncome, getExpenses} = useglobalcontext()
  return (
    <TransactionsStyled>
      <InnerLayout>
        <center>
          <h1>Transactions</h1>
        </center>
        <div className="container">
          <div className="total-income">
            <center>
              <h4>Incomes</h4>
            </center>
          </div>
          <div className="total-income">
            <center>
              <h4>Expenses</h4>
            </center>
          </div>
        </div>
      </InnerLayout>
    </TransactionsStyled>
  );
};

export default Transactions;