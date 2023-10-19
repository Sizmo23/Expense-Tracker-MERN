import React, { useContext, useState } from 'react'
import axios from "axios";

const BASE_URL = "http://localhost:9999/api/v1";

const Globalcontext = React.createContext();

export const Provider = ({children}) =>{

    const [incomes, setincome] = useState([]);
    const [counter, setcounter] = useState(0);
    const [expenses, setexpenses] = useState([]);
    const [error, seterror] = useState(null)

    const incomeList = Array.isArray(incomes.incomes) ? incomes.incomes : [];
    const ExpenseList = Array.isArray(expenses.Expenses) ? expenses.Expenses : [];

    const addIncome = async (income) => {
           await axios
          .post(`${BASE_URL}/addincome`, income)
          .then(setcounter(counter+1) )
          //.catch(err => console.error(err));
    }

    const getIncome = async () => {
        const response = await axios
          .get(`${BASE_URL}/getincome`)
          //.then(res => )
          .catch(err => console.error(err));
          setincome(response.data);
          console.log('*');
    }

    const deleteIncome = async (id) =>{
        const res = await axios
          .delete(`${BASE_URL}/deleteincome/${id}`)
          //.then(res => {alert('Income Deleted!')})
          .catch(err => console.error(err));
    }

    const totalIncome = () =>{
        let Total = 0;
        incomeList.forEach((income) => {
            Total += income.amount;
        });
        return Total;
    }

    const addExpenses = async (Expense) => {
        const response = await axios
          .post(`${BASE_URL}/addexpense`, Expense)
          .then(setcounter(counter+1) )
          .catch(err => console.error(err));
    }

    const getExpenses = async () => {
        const response = await axios
          .get(`${BASE_URL}/getexpense`)
          //.then(res => )
          .catch(err => console.error(err));
          setexpenses(response.data);
    }

    const deleteExpenses = async (id) =>{
        const res = await axios
          .delete(`${BASE_URL}/deleteExpense/${id}`)
          //.then(res => {alert('Expense Deleted!')})
          .catch(err => console.error(err));
    }

    const totalExpenses = () =>{
        let Total = 0;
        ExpenseList.forEach((Expense) => {
            Total += Expense.amount;
        });
        return Total;
    }

    return (
        <Globalcontext.Provider value={{
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
            counter
        }}>
            {children}
        </Globalcontext.Provider>
    )
};

export const useglobalcontext = () =>{
    return useContext(Globalcontext);
}