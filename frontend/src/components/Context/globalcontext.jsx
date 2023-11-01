import React, { useContext, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

const BASE_URL = "http://localhost:9999/api/v1";

const Globalcontext = React.createContext();

export const Provider = ({ children }) => {
  const [incomes, setincome] = useState([]);
  const {enqueueSnackbar} = useSnackbar();
  const [counter, setcounter] = useState(0);
  const [expenses, setexpenses] = useState([]);
  const [error, seterror] = useState(null);

  const incomeList = Array.isArray(incomes.incomes) ? incomes.incomes : [];
  const ExpenseList = Array.isArray(expenses.Expenses) ? expenses.Expenses : [];

  const addIncome = async (income) => {
    try {
      await axios.post(`${BASE_URL}/addincome`, income);
      setcounter(counter + 1);
      enqueueSnackbar("Income added successfully", {variant: "success"});
    } catch (err) {
      console.error(err);
      enqueueSnackbar(`Error! ${err}`, {variant: "error"});
      seterror(err);
    }
  };

  const getIncome = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getincome`);
      setincome(response.data);
    } catch (err) {
      console.error(err);
      enqueueSnackbar(`Error! ${err}`, {variant: "error"});
      seterror(err);
    }
  };

  const deleteIncome = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/deleteincome/${id}`);
      enqueueSnackbar("Income deleted successfully", {variant: "success"});
      getIncome();
    } catch (err) {
      console.error(err);
      enqueueSnackbar(`Error! ${err}`, {variant: "error"});
      seterror(err);
    }
  };

  const totalIncome = () => {
    let Total = 0;
    incomeList.forEach((income) => {
      Total += income.amount;
    });
    return Total;
  };

  const addExpenses = async (Expense) => {
    try {
      await axios.post(`${BASE_URL}/addexpense`, Expense);
      setcounter(counter + 1);
      enqueueSnackbar("Expense added successfully", {variant: "success"});
      getExpenses(); // Refresh the expenses list after adding.
    } catch (err) {
      console.error(err);
      enqueueSnackbar(`Error! ${err}`, {variant: "error"});
      seterror(err);
    }
  };

  const getExpenses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getexpense`);
      setexpenses(response.data);
    } catch (err) {
      console.error(err);
      enqueueSnackbar(`Error! ${err}`, {variant: "error"});
      seterror(err);
    }
  };

  const deleteExpenses = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/deleteExpense/${id}`);
      enqueueSnackbar("Expense deleted successfully", {variant: "success"});
      getExpenses(); 
    } catch (err) {
      console.error(err);
      enqueueSnackbar(`Error! ${err}`, {variant: "error"});
      seterror(err);
    }
  };

  const totalExpenses = () => {
    let Total = 0;
    ExpenseList.forEach((Expense) => {
      Total += Expense.amount;
    });
    return Total;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomeList, ...ExpenseList];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return history;
  };

  return (
    <Globalcontext.Provider
      value={{
        addIncome,
        getIncome,
        incomes,
        deleteIncome,
        totalIncome,
        addExpenses,
        getExpenses,
        expenses,
        deleteExpenses,
        totalExpenses,
        totalBalance,
        counter,
        transactionHistory,
        incomeList,
        ExpenseList,
        error
      }}
    >
      {children}
    </Globalcontext.Provider>
  );
};

export const useglobalcontext = () => {
  return useContext(Globalcontext);
};
