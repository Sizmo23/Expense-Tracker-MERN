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
      return icons.money;
    } else if (category === "Tuition") {
      return icons.freelance;
    } else if (category === "Dosto") {
      return icons.friends;
    } else if (category === "Bank Payment") {
      return icons.users;
    } else if (category === "Ammi") {
      return icons.bitcoin;
    } else if (category === "Rishtedaar") {
      return icons.card;
    } else if (category === "other") {
      return icons.piggy;
    } else {
      return "";
    }
  };

  const expenseCatIcon = () => {
    if (category === "education") {
      return icons.book;
    } else if (category === "groceries") {
      return icons.food;
    } else if (category === "health") {
      return icons.medical;
    } else if (category === "electricity") {
      return icons.electricity;
    } else if (category === "water") {
      return icons.water;
    } else if (category === "gas") {
      return icons.gas;
    } else if (category === "takeaways") {
      return icons.takeaway;
    } else if (category === "clothing") {
      return icons.clothing;
    } else if (category === "friends") {
      return icons.friends;
    } else if (category === "other") {
      return icons.circle;
    } else {
      return "";
    }
  };

  return (
    <IncomeitemStyled $indicator={indicatorColor}>
      <div className="icon">
        {type === "Expense" ? expenseCatIcon() : categoryIcon()}
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
