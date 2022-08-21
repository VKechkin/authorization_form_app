import styled from "styled-components";

export const DivWrapper = styled.div`
  margin: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Div = styled.div`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;

  @media (max-width: 800px) {
    font-size: 20px;
    line-height: 28px;
    text-align: center;
  }
`;
