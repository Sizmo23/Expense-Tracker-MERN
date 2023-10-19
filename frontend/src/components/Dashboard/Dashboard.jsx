import React from 'react'
import styled from "styled-components";
import { InnerLayout } from '../../styles/Layout';
import Chart from '../Chart/chart.jsx';

const DashboardStyled = styled.div`
`;

const Dashboard = () => {
  return (
    <DashboardStyled>
        <InnerLayout>
            <center>
                <h1> Dashboard </h1>
            </center>
            <div className="stats-con">
              <div className="chart-con">
                <Chart />
              </div>
            </div>
        </InnerLayout>
    </DashboardStyled>
  )
}


export default Dashboard