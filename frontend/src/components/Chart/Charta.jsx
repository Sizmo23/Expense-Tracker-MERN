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
import { Line } from "react-chartjs-2";
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

const Charta = () => {
  const { incomes, expenses } = useglobalcontext();
  const ExpensesList = Array.isArray(expenses.Expenses)
    ? expenses.Expenses
    : [];
  const incomeList = Array.isArray(incomes.incomes) ? incomes.incomes : [];
  var addi = 0;
  var inni = 0;

  // // Function to get the nearest and furthest dates from both income and expense lists
  // const getMinMaxDates = (list) => {
  //   const dates = list.map((item) => item.date);
  //   return {
  //     nearest: new Date(Math.min(...dates)),
  //     furthest: new Date(Math.max(...dates)),
  //   };
  // };

  // // Find the nearest and furthest dates from both income and expense lists
  // const incomeMinMaxDates = getMinMaxDates(incomeList);
  // const expenseMinMaxDates = getMinMaxDates(ExpensesList);

  // // Generate a range of dates between the nearest and furthest dates
  // const generateDateRange = (minDate, maxDate) => {
  //   const dateRange = [];
  //   let currentDate = new Date(minDate);

  //   while (currentDate <= maxDate) {
  //     dateRange.push(new Date(currentDate));
  //     currentDate.setDate(currentDate.getDate() + 1); // Increment by 1 day
  //   }

  //   return dateRange;
  // };

  // // Generate the date range
  // const dateRange = generateDateRange(
  //   new Date(Math.min(incomeMinMaxDates.nearest, expenseMinMaxDates.nearest)),
  //   new Date(Math.max(incomeMinMaxDates.furthest, expenseMinMaxDates.furthest))
  // );

  // // Create arrays to store income and expense data points based on the date range
  // const incomeDataPoints = dateRange.map((date) => {
  //   const matchingIncome = incomeList.find((item) => new Date(item.date).toDateString() === date.toDateString());
  //   return matchingIncome ? matchingIncome.amount : 0;
  // });

  // const expenseDataPoints = dateRange.map((date) => {
  //   const matchingExpense = ExpensesList.find((item) => new Date(item.date).toDateString() === date.toDateString());
  //   return matchingExpense ? matchingExpense.amount : 0;
  // });

  // const data = {
  //   labels: dateRange.map((date) => dateFormat(date)), // Format dates as needed
  //   datasets: [
  //     {
  //       label: "Income",
  //       data: incomeDataPoints,
  //       backgroundColor: "green",
  //       tension: 0.3,
  //     },
  //     {
  //       label: "Expense",
  //       data: expenseDataPoints,
  //       backgroundColor: "red",
  //       tension: 0.3,
  //     },
  //   ],
  // };

  // return (
  //   <ChartStyled>
  //     <Line data={data} />
  //   </ChartStyled>
  // );
  const incomeDates = incomeList.map((inc) => {
    const { date } = inc;
    return dateFormat(date);
  });

  const expenseDates = ExpensesList.map((expense) => {
    const { date } = expense;
    return dateFormat(date);
  });

  const allDates = [...incomeDates, ...expenseDates];
  const data = {
    labels: allDates,
    datasets: [
      {
        label: "Income",
        data: [
          ...incomeList.map((income) => {
            const { amount } = income;
            inni = inni + amount;
            console.log(`income: ${inni}`);
            return inni;
          }),
        ],
        borderColor: "#4CBB17",
        pointBorderWidth: 4,
        tension: 0.2,
      },
      {
        label: "Expenses",
        data: [
          ...ExpensesList.map((expense) => {
            const { amount } = expense;
            addi = amount + addi;
            console.log(`expense: ${addi}`);
            return addi;
          }),
        ],
        borderColor: "#D70040",
        pointBorderWidth: 4,
        tension: 0.2,
      },
    ],
  };

  return (
    <ChartStyled>
      <Line data={data} />
    </ChartStyled>
  );
};

export default Charta;
