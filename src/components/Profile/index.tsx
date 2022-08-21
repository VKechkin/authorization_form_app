import React, { useContext } from "react";

import { ExitButton } from "@components/ExitButton";

import { AppContext } from "@store";

import { useAppNavigation } from "@hooks";

import * as S from "./styles";

const Profile: React.FC = () => {
  const { userName } = useContext(AppContext);

  const { goAuthorization } = useAppNavigation();

  return (
    <S.DivWrapper>
      <S.Div>
        Здравствуйте,
        <b> {userName}</b>
      </S.Div>
      <ExitButton onClick={goAuthorization}>Выход</ExitButton>
    </S.DivWrapper>
  );
};

export { Profile };
