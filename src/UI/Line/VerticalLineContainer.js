import styled from "styled-components";

const VerticalLineContainer = styled.div`
  display: flex;
  height: ${props => props.height};
  width: 100%;
  margin: 0.5rem 2em;
  display: flex;
  align-items: center;
  position: relative;
  &::before{
    /* content: "";
    position: absolute;
    height: 32%;
    width: 40%;
    top: calc(50% - 32%);
    left: 5%;
    border: 5px solid green;
    border-right: none;
    border-top: none; */
  }
  &::after{
    /* content: "";
    position: absolute;
    height: 32%;
    width: 40%;
    top: 49.5%;
    right: 5%;
    border: 5px solid green;
    border-left: none;
    border-bottom: none; */
  }
`
export const Up = styled.span`
    position: absolute;
    height: calc(50% + 5px);
    width: 42%;
    top: 0%;
    left: 0%;
    border: 5px solid #00bcd4;
    border-right: none;
    border-top: none;
    &.reverse{
      left: initial;
      right: 0;
      transform: scaleX(-1);
    }
`
export const Down = styled.span`
    position: absolute;
    height: 50%;
    width: 42%;
    top:50%;
    right: 0%;
    border: 5px solid #00bcd4;
    border-left: none;
    border-bottom: none;
    &.reverse{
      right: initial;
      left: 0;
      transform: scaleX(-1);
    }
`
export const Circle = styled.span`
  height : 20px;
  width : 20px;
  background-color: #00bcd4;
  border-radius: 50%;
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translateX(-50%);
`

export default VerticalLineContainer;