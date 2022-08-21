import React from "react";

import { IPropsHeader } from "../../interfaces";

import * as S from "./styles";

const Header: React.FC<IPropsHeader> = ({ children }) => {
  return <S.HeaderDiv>{children}</S.HeaderDiv>;
};

export { Header };
