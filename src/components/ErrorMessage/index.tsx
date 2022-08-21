import React from "react";

import { IProps } from "@interfaces";

import * as S from "./styles";

const ErrorMessage: React.FC<IProps> = ({ message }) => {
  return <S.ErrorDiv>{message != null ? message : "Error !"}</S.ErrorDiv>;
};

export { ErrorMessage };
