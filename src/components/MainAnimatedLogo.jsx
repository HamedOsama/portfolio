import React from 'react'
import styled, { keyframes } from 'styled-components'
import { YinYang } from './SVGS'

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`
const Container = styled.div`
  position: absolute;
  top:  ${props => props.isOpened ? '85%' : '50%'} ;
  left: ${props => props.isOpened ? '92%' : '50%'} ;
  transform : translate(-50%,-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  transition: 1s ease;
  .logo{
    animation: 1.5s ${rotate} infinite linear;
  }
`

const MainAnimatedLogo = props => {
  return (
    <Container isOpened={props.isOpened} onClick={props.onClick}>
      <YinYang className="logo" width={props.isOpened ? 120 : 200} height={props.isOpened ? 120 : 200} fill="currentColor" />
      {!props.isOpened && <span>Click Here</span>}
    </Container>
  )
}

export default MainAnimatedLogo