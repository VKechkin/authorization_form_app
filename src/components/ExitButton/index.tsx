import React, { useRef } from "react";

import { IPropsButton } from "@interfaces";

import * as S from "./styles";

const ExitButton: React.FC<IPropsButton> = ({
  onClick,
  children,
  ...restProps
}) => {
  const rootRef = useRef<HTMLButtonElement>(null);

  return (
    <S.ExitButton onClick={onClick} ref={rootRef} {...restProps}>
      {children}
    </S.ExitButton>
  );
};

export { ExitButton };
