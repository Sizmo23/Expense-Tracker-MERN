import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import icons from "../../utils/icons";
import { useglobalcontext } from "../Context/globalcontext";
import Button from "../Button/Button";
import { useSnackbar } from "notistack";

const ExpenseFormstyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  #dd2{
    margin-top:30px;
  }
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }

    .input-control{
      input{
        width: 100%;
      }
    }

    #dd1{
      display: flex;
      justify-content: right;
    }
    
    .selects.input-control select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
    
    
    

    .submit-btn Button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      transition: background 0.3s ease; /* Add a transition to the background property */
    }
    
    .submit-btn Button:hover {
      background: var(--color-green);
    }
    
`;

const ExpenseForm = () => {
  const { addExpenses, getExpenses, error } = useglobalcontext();
  const {enqueueSnackbar} = useSnackbar();
  const [inputstate, setinputstate] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputstate;

  const handleInput = (name) => (e) => {
    setinputstate({ ...inputstate, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);

    if (!title || !date || !amount || !category || !description) {
      enqueueSnackbar(`Error! All Fields are Required!`, {variant: "error"});
      return;
    }

    if (isNaN(parsedAmount)) {
      enqueueSnackbar(`Error! Amount is not a valid number.`, {variant: "error"});
      console.error("Amount is not a valid number.");
      return;
    }

    const newExpenses = {
      title,
      amount: parsedAmount,
      date,
      category,
      description,
    };

    addExpenses(newExpenses);
    setinputstate({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
    getExpenses();
  };

  return (
    <ExpenseFormstyled onSubmit={handleSubmit}>
      <div id="dd2" className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Expenses Title"
          onChange={handleInput("title")}
        />
      </div>

      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter a Date"
          selected={date}
          dateFormat={"dd/MM/yyyy"}
          onChange={(date) => {
            setinputstate({ ...inputstate, date: date });
          }}
        />
      </div>

      <div className="input-control">
        <input
          value={amount}
          type="number"
          name={"amount"}
          placeholder={"Expenses Amount"}
          onChange={handleInput("amount")}
        />
      </div>

      <div id="dd1" className="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="education">Education</option>
          <option value="groceries">Groceries</option>
          <option value="health">Health</option>
          <option value="electricity">Electricity</option>
          <option value="water">Water</option>
          <option value="gas">Gas</option>
          <option value="takeaways">Takeaways</option>
          <option value="clothing">Clothing</option>
          <option value="friends">Friends</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          name="description"
          value={description}
          placeholder="Add A Reference"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
        ></textarea>
      </div>

      <center>
        <div className="submit-btn">
          <Button
            name={"Add Expenses"}
            icon={icons.plus}
            bPad={".8rem 1.6rem"}
            bRad={"30px"}
            bg={"var(--color-accent"}
            color={"#fff"}
          />
        </div>
      </center>
    </ExpenseFormstyled>
  );
};

export default ExpenseForm;
