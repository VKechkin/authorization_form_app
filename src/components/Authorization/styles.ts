import styled, { css } from "styled-components";

import { TPropsError } from "@types";

export const DivWrapper = styled.div`
  width: 640px;
  margin: auto;

  @media (max-width: 660px) {
    width: 270px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input<TPropsError>`
  background-color: #f5f5f5;
  border-radius: 8px;
  border: none;
  padding: 21px 20px 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  width: 100%;
  margin-top: 10px;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.error &&
    css`
      border: 1px solid #e26f6f;
      color: #e26f6f;
    `}
`;

export const Button = styled.button`
  margin-top: 20px;
  background-color: #4a67ff;
  border-radius: 8px;
  border: none;
  padding: 19px;
  color: white;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

export const InputCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
  }

  & + label::before {
    content: "";
    display: inline-block;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #000000;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    box-sizing: border-box;
    cursor: pointer;
  }

  &:checked + label::before {
    padding: 3px;
    background-color: #0b76ef;
    border: 1px solid #000000;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 19px;
`;
