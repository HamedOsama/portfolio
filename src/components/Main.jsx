import React from 'react'
import styled from 'styled-components'
import MainContainer from '../UI/Containers/MainContainer'
import Logo from './Logo'
import PowerButton from './PowerButton'
import SocialIcons from './SocialIcons'

const Container = styled.div`
  padding : 2rem;
`
const Main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <Logo />
        <SocialIcons />
      </Container>
    </MainContainer>
  )
}

export default Main