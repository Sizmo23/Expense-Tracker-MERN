import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import {Line} from 'react-chartjs-2'
import { useglobalcontext } from "../Context/globalcontext";
import styled from "styled-components";
import { dateFormat } from "../../utils/dateFormat";
ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ChartStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
`;

const Chart = () => {
  const {incomes, expenses} = useglobalcontext();
  const ExpensesList = Array.isArray(expenses.Expenses)
    ? expenses.Expenses
    : [];
  const incomeList = Array.isArray(incomes.incomes) ? incomes.incomes : [];

  const data = {
    labels: incomeList.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: "Income",
        data: [
          ...incomeList.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: "green",
        tension: 1,
      },
      {
        label: "Expense",
        data: [
          ...ExpensesList.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        backgroundColor: "red",
        tension: 1,
      },
    ],
  };

  return (
    <ChartStyled>
      <Line data={data} />
    </ChartStyled>
  );
};
export default Chart;
