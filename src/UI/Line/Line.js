import styled from "styled-components";

const Line = styled.div`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.theme.text};
  animation: 3s downwards infinite linear;
  @keyframes downwards {
  0% {
    transform-origin: top;
    transform: scaleY(0);
  }
  45% {
    transform-origin: top;
    transform: scaleY(1);
  }
  55% {
    transform-origin: bottom;
    transform: scaleY(1);
  }
  100% {
    transform-origin: bottom;
    transform: scaleY(0);
  } 
}
  /* @keyframes downwards {
    0%{
      height: 8rem;
    }
    100%{
      height: 0;
    }
  } */
`

export default Line;