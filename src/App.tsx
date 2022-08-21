import React, { useState } from "react";
import { useRoutes } from "react-router-dom";

import { Header } from "./components/Header";

import AppContext from "./store";

import Routes from "./Routes";

import * as S from "./styles";

const App = () => {
  const routes = useRoutes(Routes);

  const [userName, setUserName] = useState("");

  return (
    <>
      <AppContext.Provider value={{ userName, setUserName }}>
        <S.GlobalWrapper>
          <Header>ONLY.</Header>
          {routes}
        </S.GlobalWrapper>

        <S.GlobalStyle />
      </AppContext.Provider>
    </>
  );
};

export default App;
