import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layout.jsx";
import Orb from "./components/Orb/Orb.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import { useMemo, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from "./components/Incomes/Incomes";
import Transactions from "./components/Transactions/Transactions";
import { useglobalcontext } from "./components/Context/globalcontext";

const AppStyled = styled.div`
  height: 100vh;
  font-family: "Nunito", sans-serif;
  background: ${({ $bg }) => $bg ? `url(${$bg}) no-repeat center center fixed` : 'initial'};
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

function App() {
  const [active, setactive] = useState(1);

  const global = useglobalcontext();

  const orbmemo = useMemo(()=>{
    return <Orb />
  },[]);

  const displayData = () =>{
    switch(active){
        case 1:
          return <Dashboard />
        case 2:
          return <Transactions />
        case 3:
          return <Income />
        case 4:
          return <Expenses />
        default: 
          return <Dashboard />
    }
  }
  return (
    <>
      <AppStyled $bg={bg} className="App">
        {orbmemo}
        <MainLayout>
          <Navigation active={active} setactive={setactive}/>
          <main>
            {displayData()}
          </main>
        </MainLayout>
      </AppStyled>
    </>
  );
}

export default App;
