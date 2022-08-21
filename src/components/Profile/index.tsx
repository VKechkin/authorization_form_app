import React, { useContext } from "react";

import { ExitButton } from "../ExitButton";

import AppContext from "../../store";

import * as S from "./styles";

const Profile = () => {
  const { userName } = useContext(AppContext);

  return (
    <S.DivWrapper>
      <S.Div>
        Здравствуйте,
        <b> {userName}</b>
      </S.Div>
      <ExitButton />
    </S.DivWrapper>
  );
};

export { Profile };
