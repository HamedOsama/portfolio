import styled from "styled-components";

const DarkContainer = styled.div`
  position: absolute;
  background-color: #000000;
  top: 0;
  bottom: 0;
  right: 50% ;
  width: ${props => props.isOpened ? "50%" : '0'};
  height:  ${props => props.isOpened ? "100%" : '0'};
  transition: height 0.5s ease , width 1s ease 0.45s;
  z-index: 1;
`

export default DarkContainer;