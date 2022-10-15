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
  top: 50%;
  left:50%;
  transform : translate(-50%,-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  .logo{
    animation: 1.5s ${rotate} infinite linear;
  }
`

const MainAnimatedLogo = () => {
  return (
    <Container>
      <YinYang className="logo" width={200} height={200} fill="currentColor" />
      <span>Click Here</span>
    </Container>
  )
}

export default MainAnimatedLogo