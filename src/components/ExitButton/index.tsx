import React, { useState } from "react";

import useAppNavigation from "../../hooks";

import * as S from "./styles";

const ExitButton = () => {
  const { goAuthorization } = useAppNavigation();

  return <S.ExitButton onClick={() => goAuthorization()}>Выход</S.ExitButton>;
};

export { ExitButton };
