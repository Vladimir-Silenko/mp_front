import { styled } from "styled-components";
import { HEADER_HEIGHT, Z_INDEX_LEVEL_2, colors } from "../../consts";

export const HeaderContainer = styled.div`
  background-color: ${colors.primary};
  height: ${HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  padding: 14px 20px;
  z-index: ${Z_INDEX_LEVEL_2};
  color: #fff;
`;
