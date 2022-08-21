import React, { useState } from "react";

import { IProps } from "@interfaces";

import * as S from "./styles";

const ServerError: React.FC<IProps> = ({ children }) => {
  return (
    <S.ErrorWrapper>
      <S.ErrorIcon>
        <S.ErrorSymbol>!</S.ErrorSymbol>
      </S.ErrorIcon>
      <S.ErrorDiv>{children}</S.ErrorDiv>
    </S.ErrorWrapper>
  );
};

export { ServerError };
