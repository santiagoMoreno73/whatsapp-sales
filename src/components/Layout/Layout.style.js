import styled from "styled-components";

import { v } from "../../theme/variables";

export const SLayout = styled.div`
  display: flex;
`;

export const SMain = styled.main`
  padding: calc(${v.smSpacing} * 2);

  h1 {
    font-size: 14px;
  }
`;

export const SSignIn = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
