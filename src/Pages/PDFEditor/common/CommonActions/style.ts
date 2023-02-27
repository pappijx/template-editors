import styled from "styled-components";

export const ActionContainerWrapper: any = styled.div`
  border: ${(props: any) => (props?.active ? "solid" : "none")};
  border-color: blue;
`;

export const ActionContainer = styled.div`
  display: flex;
  width: 200px;
  background-color: blue;
`;

export const Action = styled.span`
  color: white;
  cursor: pointer;
`;
