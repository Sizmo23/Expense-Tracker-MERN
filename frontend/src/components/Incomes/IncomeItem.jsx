import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import icons from "../../utils/icons";

const IncomeitemStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: #222260;
  .icon {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff;
    i {
      font-size: 2.6rem;
    }
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h5 {
      font-size: 1.3rem;
      padding-left: 2rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: ${({ $indicator }) => $indicator || "green"};
      }
    }

    .inner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .text {
        display: flex;
        align-items: center;
        gap: 10rem; /* Adjust the gap as needed */

        p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-color);
          opacity: 0.8;
        }
      }

      .icons {
        display: flex;
        align-items: center;
        gap: 10rem; /* Adjust the gap between icons as needed */
      }
    }
  }
`;

const Incomeitem = ({
  id,
  title,
  amount,
  date,
  category,
  deleteItem,
  indicatorColor,
  type,
}) => {
  const categoryIcon = () => {
    if (category === "salary") {
      console.log("**3");
      return icons.money;
    } else if (category === "Tuition") {
      console.log("**special");
      return icons.freelance;
    } else if (category === "Dosto") {
      console.log("**3");
      return icons.stocks;
    } else if (category === "Bank Payment") {
      console.log("**3");
      return icons.users;
    } else if (category === "Ammi") {
      console.log("**3");
      return icons.bitcoin;
    } else if (category === "Rishtedaar") {
      console.log("**3");
      return icons.card;
    } else if (category === "other") {
      return icons.piggy;
    } else {
      console.log("**3");
      return "";
    }
  };

  const expenseCatIcon = () => {
    if (category === "education") {
      console.log("**eee");
      return icons.book;
    } else if (category === "groceries") {
      return icons.food;
    } else if (category === "health") {
      return icons.medical;
    } else if (category === "subscriptions") {
      return icons.tv;
    } else if (category === "takeaways") {
      return icons.takeaway;
    } else if (category === "clothing") {
      return icons.clothing;
    } else if (category === "travelling") {
      return icons.freelance;
    } else if (category === "other") {
      return icons.circle;
    } else {
      console.log("**e;se");
      return "";
    }
  };

  console.log( id,
    title,
    amount,
    date,
    category,
    deleteItem,
    indicatorColor,
    type);

  return (
    <IncomeitemStyled $indicator={indicatorColor}>
      <div className="icon">
        {type === "expense" ? expenseCatIcon() : categoryIcon()}
      </div>
      <div className="content">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>
              {icons.dollar} {amount}
            </p>
            <p>
              {icons.calender} {date}
            </p>
          </div>
          <div className="btn-con">
            <Button
              icon={icons.trash}
              bPad={"1rem"}
              bRad={"50%"}
              bg={"var(--primary-color)"}
              color={"#fff"}
              iColor={"#fff"}
              hColor={"var(--color-green)"}
              onClick={() => deleteItem(id)}
            />
          </div>
        </div>
      </div>
    </IncomeitemStyled>
  );
};

export default Incomeitem;
