import React from "react";
import { useglobalcontext } from "../Context/globalcontext";
import styled from "styled-components";

const History = () => {
  const { transactionHistory } = useglobalcontext();

  const [...history] = transactionHistory();
  return (
    <Historystyled>
      <h2> Recent History </h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div key={_id} className="history-item">
            <p
              style={{
                color: type === "Expense" ? "red" : "var(--color-green)",
              }}
            >
              {title}
            </p>
            <p
              style={{
                color: type === "Expense" ? "red" : "var(--color-green)",
              }}
            >
              {type === "Expense" ? `-${amount}` : `+${amount}`}
            </p>
          </div>
        );
      })}
    </Historystyled>
  );
};

const Historystyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default History;
