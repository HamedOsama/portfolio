import React from 'react'
import styled from 'styled-components'
import MainContainer from '../UI/Containers/MainContainer'
import CustomPageLink from './CustomPageLink'
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
        <CustomPageLink
          title="Blog"
          link="/blog"
          top="50%"
          right="calc(1rem + 2vw)"
          transform='rotate(90deg) translate(-50%,-50%)'
        />
        <CustomPageLink
          title="Work"
          link="/work"
          top="50%"
          left="calc(1rem + 2vw)"
          transform='translate(-50%,-50%) rotate(-90deg)'
        />
        <CustomPageLink
          title="About"
          link="/about"
          bottom="1rem"
          left="calc(50% - 20vw)"
          transform='translateX(-50%)'
        />
        <CustomPageLink
          title="Skills"
          link="/skills"
          bottom="1rem"
          left="calc(50% + 20vw)"
          transform='translateX(-50%)'
        />
      </Container>
    </MainContainer>
  )
}

export default Main