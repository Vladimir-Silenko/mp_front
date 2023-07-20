import { createGlobalStyle, styled } from "styled-components";
import { FOOTER_HEIGHT, HEADER_HEIGHT, colors } from "./consts";
export const AppStyles = createGlobalStyle`
body{
    font-family: 'Montserrat', sans-serif;
    margin:0;
    font-size:14px;
    font-weight:normal;
    font-style:normal;
    color:#5e5873;
    min-width:320px;
}
*,
*before,
*after {
    box-sizing:border-box;
}
a{
    color:inherit;
    text-decoration:inherit;
    color:${colors.primary};
}
ul,li{
    list-style:none;
}
h3{
    font-size:18px;
}
h4{
    font-size:16px;
}
p,li{
    line-height:21px;
}
`;

//Global styled components
export const PageWrapper = styled.div`
  padding: 20px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
`;
export const Footer = styled.div`
  height: ${FOOTER_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primary};
  color: #fff;
  padding: 10px 20px;
  > :last-child {
    cursor: pointer;
  }
`;
