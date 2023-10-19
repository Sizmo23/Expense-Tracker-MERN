import React from 'react'
import styled from "styled-components";
import { InnerLayout } from '../../styles/Layout';

const TransactionsStyled = styled.div`
`;

const Transactions = () => {
  return (
    <TransactionsStyled>
        <InnerLayout>
            <center>
                <h1> Transactions </h1>
            </center>
        </InnerLayout>
    </TransactionsStyled>
  )
}


export default Transactions