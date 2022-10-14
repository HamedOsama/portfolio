import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.h1`
  display: inline-block;
  color: ${props => props.theme.text};
  font-family: 'Pacifico',cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 10;
`
const Logo = () => {
  return (
    <LogoContainer>
      HO
    </LogoContainer>
  )
}

export default Logo