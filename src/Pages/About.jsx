import React from 'react'
import styled from 'styled-components'
import CardsContainer from '../components/CardsContainer'
import WindowCard from '../components/WindowCard'
import SocialIcons from '../components/SocialIcons'
import { DarkTheme, LightTheme } from '../components/Themes'
import Logo from '../components/Logo'
import PowerButton from '../components/PowerButton'
const Container = styled.div`
  width : 100%;
  height : auto;
  padding: 100px 150px;
  position: relative;
  background-color: #FCF6F4;
  /* overflow-y : scroll; */
    @media (max-width: 1080px) {
      padding: 100px 100px;
    }
    @media (max-width: 768px) {
      padding: 100px 50px;
    }
    @media (max-width: 480px) {
      padding: 100px 25px;
    }
`
const About = () => {
  return (
    <Container>
      <CardsContainer />
      <SocialIcons theme={LightTheme} />
      <Logo theme={LightTheme} />
      <PowerButton />
    </Container>
  )
}

export default About